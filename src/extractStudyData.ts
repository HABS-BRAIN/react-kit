import { Field } from './shared-types/form'
import { Step } from './shared-types/protocol'
import { CurrentPosition, StudyFullInfo } from './shared-types/study'

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
  currentPosition: CurrentPosition,
):
  | {
      step: Step
      type: 'protocol'
      linearIndex: number
    }
  | {
      step: Field
      type: 'form'
      linearIndex: number
    } {
  const { blockIndex, stepIndex } = currentPosition
  const block = studyFullInfo.sequence[blockIndex]
  if (!block) {
    throw new Error(`Block with index ${blockIndex} not found in study sequence`)
  }

  const currentStepLinearIndex = currentPositionToLinearIndex(
    studyFullInfo,
    currentPosition,
  )

  if (block.type === 'protocol') {
    const step = block.protocol.steps[stepIndex]
    if (!step) {
      throw new Error(
        `Step with index ${stepIndex} not found in block at index ${blockIndex}`,
      )
    }
    return { step, type: 'protocol', linearIndex: currentStepLinearIndex }
  }

  const step = block.form.fields[stepIndex]
  if (!step) {
    throw new Error(
      `Step with index ${stepIndex} not found in block at index ${blockIndex}`,
    )
  }
  return { step, type: 'form', linearIndex: currentStepLinearIndex }
}

export function currentPositionToLinearIndex(
  studyFullInfo: StudyFullInfo,
  currentPosition: CurrentPosition,
): number {
  const { blockIndex, stepIndex } = currentPosition
  const block = studyFullInfo.sequence[blockIndex]
  if (!block) {
    throw new Error(`Block with index ${blockIndex} not found in study sequence`)
  }

  const step = getBlockSteps(block)[stepIndex]
  if (!step) {
    throw new Error(
      `Step with index ${stepIndex} not found in block at index ${blockIndex}`,
    )
  }

  const linearIndex = studyFullInfo.sequence
    .slice(0, blockIndex)
    .reduce((index, currentBlock, indexInSequence) => {
      const stepsCount = getBlockSteps(currentBlock).length
      const copiedStepsCount = getCopiedStepsCount(
        currentBlock,
        studyFullInfo.sequence[indexInSequence + 1],
      )
      return index + stepsCount * (1 + copiedStepsCount)
    }, 0)

  const nextBlock = studyFullInfo.sequence[blockIndex + 1]
  const copiedStepsCount = getCopiedStepsCount(block, nextBlock)
  return linearIndex + stepIndex * (1 + copiedStepsCount)
}

export function extractLinearStudySequence(
  studyFullInfo: StudyFullInfo,
): (Step | Field)[] {
  const linearSequence: (Step | Field)[] = []

  studyFullInfo.sequence.forEach((block, blockIndex) => {
    const steps = getBlockSteps(block)
    const nextBlock = studyFullInfo.sequence[blockIndex + 1]
    const nextSteps = nextBlock ? getBlockSteps(nextBlock) : []
    const copyCount = getCopiedStepsCount(block, nextBlock)

    steps.forEach((step) => {
      linearSequence.push(step)
      if (copyCount > 0) {
        linearSequence.push(...nextSteps.slice(0, copyCount))
      }
    })
  })

  return linearSequence
}
