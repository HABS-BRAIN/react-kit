import { Field } from './shared-types/form'
import { Step } from './shared-types/protocol'
import { StudyFullInfo } from './shared-types/study'

const getBlockSteps = (block: StudyFullInfo['sequence'][number]): Step[] | Field[] => {
  if (block.type === 'protocol') {
    return block.protocol.steps
  }
  return block.form.fields
}

const getCopiedBlocksCount = (
  block: StudyFullInfo['sequence'][number],
  sequenceLength: number,
  blockIndex: number,
): number => {
  const requestedCount = block.runNextBlockAfterEachStep ?? 0
  if (requestedCount <= 0) {
    return 0
  }
  const availableCount = sequenceLength - blockIndex - 1
  return Math.min(requestedCount, availableCount)
}

export type LinearSequenceItemPosition = {
  blockIndex: number
  stepIndex: number
  linearIndex: number
}

export type LinearSequenceItem =
  | ({ step: Step; type: 'protocol' } & LinearSequenceItemPosition)
  | ({ step: Field; type: 'form' } & LinearSequenceItemPosition)

function createSequenceItem(
  block: StudyFullInfo['sequence'][number],
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
  block: StudyFullInfo['sequence'][number],
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

export function extractLinearStudySequence(
  studyFullInfo: StudyFullInfo,
): LinearSequenceItem[] {
  const linearSequence: LinearSequenceItem[] = []
  const linearIndex = { value: 0 }
  let skipUntilBlockIndex = -1

  for (let blockIndex = 0; blockIndex < studyFullInfo.sequence.length; blockIndex++) {
    // Skip blocks that were already injected as copied blocks
    if (blockIndex <= skipUntilBlockIndex) {
      continue
    }

    const currentBlock = studyFullInfo.sequence[blockIndex]
    const currentSteps = getBlockSteps(currentBlock)
    const numBlocksToInject = getCopiedBlocksCount(
      currentBlock,
      studyFullInfo.sequence.length,
      blockIndex,
    )

    // Mark blocks to skip (they'll be injected after each step)
    if (numBlocksToInject > 0) {
      skipUntilBlockIndex = blockIndex + numBlocksToInject
    }

    // Process each step in the current block
    for (let stepIndex = 0; stepIndex < currentSteps.length; stepIndex++) {
      // Add the current step
      linearSequence.push(
        createSequenceItem(currentBlock, stepIndex, blockIndex, linearIndex.value++),
      )

      // Inject the next N blocks after this step
      for (let offset = 1; offset <= numBlocksToInject; offset++) {
        const nextBlockIndex = blockIndex + offset
        const nextBlock = studyFullInfo.sequence[nextBlockIndex]
        addBlockToSequence(linearSequence, nextBlock, nextBlockIndex, linearIndex)
      }
    }
  }

  return linearSequence
}
