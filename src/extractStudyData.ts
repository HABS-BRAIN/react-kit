import { Field } from './shared-types/form'
import { Step } from './shared-types/protocol'
import { SequenceBlockItem, StudyFullInfo } from './shared-types/study'

type SequenceBlock = StudyFullInfo['sequence'][number]
type ResolvedBlock = { block: SequenceBlock; index: number }

const getBlockSteps = (block: SequenceBlock): Step[] | Field[] => {
  if (block.type === 'protocol') {
    return block.protocol.steps
  }
  return block.form.fields
}

const getBlockId = (block: SequenceBlock): string =>
  block.type === 'protocol' ? block.protocol._id : block.form._id

export type LinearSequenceItemPosition = {
  blockIndex: number
  stepIndex: number
  linearIndex: number
}

export type LinearSequenceItem =
  | ({ step: Step; type: 'protocol' } & LinearSequenceItemPosition)
  | ({ step: Field; type: 'form' } & LinearSequenceItemPosition)

function createSequenceItem(
  block: SequenceBlock,
  stepIndex: number,
  blockIndex: number,
  linearIndex: number,
): LinearSequenceItem {
  const item = {
    step: block.type === 'protocol' ? block.protocol.steps[stepIndex] : block.form.fields[stepIndex],
    type: block.type,
    blockIndex,
    stepIndex,
    linearIndex,
  }
  return item as LinearSequenceItem
}

function addBlockToSequence(
  linearSequence: LinearSequenceItem[],
  block: SequenceBlock,
  blockIndex: number,
  linearIndexRef: { value: number },
): void {
  const steps = getBlockSteps(block)
  for (let stepIndex = 0; stepIndex < steps.length; stepIndex++) {
    linearSequence.push(
      createSequenceItem(block, stepIndex, blockIndex, linearIndexRef.value++),
    )
  }
}

function injectCompanion(
  linearSequence: LinearSequenceItem[],
  companion: SequenceBlockItem,
  mainStepIndex: number,
  blockByIdMap: Map<string, ResolvedBlock>,
  linearIndexRef: { value: number },
): void {
  const resolved = blockByIdMap.get(companion._id)
  if (!resolved) return

  if (companion.mixSteps) {
    // One companion step per main step, cycling through the companion's steps
    const companionSteps = getBlockSteps(resolved.block)
    if (companionSteps.length === 0) {
      return
    }
    linearSequence.push(
      createSequenceItem(
        resolved.block,
        mainStepIndex % companionSteps.length,
        resolved.index,
        linearIndexRef.value++,
      ),
    )
  } else {
    // Full companion block for every main step
    addBlockToSequence(linearSequence, resolved.block, resolved.index, linearIndexRef)
  }
}

export function extractLinearStudySequence(
  studyFullInfo: StudyFullInfo,
): LinearSequenceItem[] {
  const linearSequence: LinearSequenceItem[] = []
  const linearIndex = { value: 0 }

  // Build an id→block map and collect all IDs that are used as companions
  const blockByIdMap = new Map<string, ResolvedBlock>()
  const companionIds = new Set<string>()

  studyFullInfo.sequence.forEach((block, index) => {
    const resolved = { block, index }
    // Support both new snapshots (companion references remapped to generated ids)
    // and older snapshots (companion references point to template ids).
    blockByIdMap.set(getBlockId(block), resolved)
    blockByIdMap.set(block.templateId, resolved)

    for (const c of [...(block.beforeBlocks ?? []), ...(block.afterBlocks ?? [])]) {
      companionIds.add(c._id)
    }
  })

  for (let blockIndex = 0; blockIndex < studyFullInfo.sequence.length; blockIndex++) {
    const currentBlock = studyFullInfo.sequence[blockIndex]

    // Companion blocks are injected inline — skip them as standalone entries
    if (companionIds.has(getBlockId(currentBlock)) || companionIds.has(currentBlock.templateId)) {
      continue
    }

    const currentSteps = getBlockSteps(currentBlock)
    const beforeBlocks = currentBlock.beforeBlocks ?? []
    const afterBlocks = currentBlock.afterBlocks ?? []

    const mainStepCount = currentSteps.length
    // If the block has no main steps (e.g. EMOTINDER preview produced zero media steps) but
    // has companions, still run one pass so before/after blocks appear in the linear order.
    const runCompanionOnlyPass =
      mainStepCount === 0 && (beforeBlocks.length > 0 || afterBlocks.length > 0)
    const iterations = runCompanionOnlyPass ? 1 : mainStepCount

    for (let stepIndex = 0; stepIndex < iterations; stepIndex++) {
      for (const companion of beforeBlocks) {
        injectCompanion(linearSequence, companion, stepIndex, blockByIdMap, linearIndex)
      }

      if (mainStepCount > 0) {
        linearSequence.push(
          createSequenceItem(currentBlock, stepIndex, blockIndex, linearIndex.value++),
        )
      }

      for (const companion of afterBlocks) {
        injectCompanion(linearSequence, companion, stepIndex, blockByIdMap, linearIndex)
      }
    }
  }

  return linearSequence
}
