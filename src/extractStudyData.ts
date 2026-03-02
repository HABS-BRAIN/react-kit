import { Field } from './shared-types/form'
import { Step } from './shared-types/protocol'
import { StudyFullInfo } from './shared-types/study'

const getBlockSteps = (block: StudyFullInfo['sequence'][number]): Step[] | Field[] => {
  if (block.type === 'protocol') {
    return block.protocol.steps
  }
  return block.form.fields
}

const getCopiedStepsCount = (
  block: StudyFullInfo['sequence'][number],
  nextBlock?: StudyFullInfo['sequence'][number],
): number => {
  const nextSteps = nextBlock ? getBlockSteps(nextBlock) : []
  const copyCount = block.runNextBlockAfterEachStep ?? 0
  return copyCount > 0 ? Math.min(copyCount, nextSteps.length) : 0
}

export function extractCurrentStep(
  studyFullInfo: StudyFullInfo,
  linearIndex: number,
): LinearSequenceItem {
  const linearSequence = extractLinearStudySequence(studyFullInfo)
  const item = linearSequence[linearIndex]

  if (!item) {
    throw new Error(
      `Linear index ${linearIndex} is out of bounds (0-${linearSequence.length - 1})`,
    )
  }

  return item
}

export function linearIndexToPosition(
  studyFullInfo: StudyFullInfo,
  linearIndex: number,
): { blockIndex: number; stepIndex: number } {
  const item = extractCurrentStep(studyFullInfo, linearIndex)
  return { blockIndex: item.blockIndex, stepIndex: item.stepIndex }
}

export function linearIndexToBlockIndex(
  studyFullInfo: StudyFullInfo,
  linearIndex: number,
): number {
  return extractCurrentStep(studyFullInfo, linearIndex).blockIndex
}

export function linearIndexToStepIndex(
  studyFullInfo: StudyFullInfo,
  linearIndex: number,
): number {
  return extractCurrentStep(studyFullInfo, linearIndex).stepIndex
}

type LinearSequenceItemCommon = {
  blockIndex: number
  stepIndex: number
  linearIndex: number
}

export type LinearSequenceItem =
  | ({ step: Step; type: 'protocol' } & LinearSequenceItemCommon)
  | ({ step: Field; type: 'form' } & LinearSequenceItemCommon)

function createSequenceItem(
  block: StudyFullInfo['sequence'][number],
  stepIndex: number,
  blockIndex: number,
  linearIndex: number,
): LinearSequenceItem {
  if (block.type === 'protocol') {
    return {
      step: block.protocol.steps[stepIndex],
      type: 'protocol',
      blockIndex,
      stepIndex,
      linearIndex,
    }
  }
  return {
    step: block.form.fields[stepIndex],
    type: 'form',
    blockIndex,
    stepIndex,
    linearIndex,
  }
}

export function extractLinearStudySequence(
  studyFullInfo: StudyFullInfo,
): LinearSequenceItem[] {
  const linearSequence: LinearSequenceItem[] = []
  let linearIndex = 0

  studyFullInfo.sequence.forEach((block, blockIndex) => {
    const steps = getBlockSteps(block)
    const nextBlock = studyFullInfo.sequence[blockIndex + 1]
    const copyCount = getCopiedStepsCount(block, nextBlock)

    steps.forEach((_, stepIndex) => {
      linearSequence.push(createSequenceItem(block, stepIndex, blockIndex, linearIndex++))

      if (copyCount > 0 && nextBlock) {
        const nextSteps = getBlockSteps(nextBlock)
        for (let i = 0; i < Math.min(copyCount, nextSteps.length); i++) {
          linearSequence.push(createSequenceItem(nextBlock, i, blockIndex + 1, linearIndex++))
        }
      }
    })
  })

  return linearSequence
}
