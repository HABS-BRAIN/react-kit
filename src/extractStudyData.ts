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
):
  | {
      step: Step
      type: 'protocol'
      linearIndex: number
      blockIndex: number
      stepIndex: number
    }
  | {
      step: Field
      type: 'form'
      linearIndex: number
      blockIndex: number
      stepIndex: number
    } {
  const { blockIndex, stepIndex } = linearIndexToPosition(studyFullInfo, linearIndex)
  const block = studyFullInfo.sequence[blockIndex]
  
  if (!block) {
    throw new Error(`Block with index ${blockIndex} not found in study sequence`)
  }

  const steps = getBlockSteps(block)
  const step = steps[stepIndex]
  
  if (!step) {
    throw new Error(
      `Step with index ${stepIndex} not found in block at index ${blockIndex}`,
    )
  }

  if (block.type === 'protocol') {
    return { step: step as Step, type: 'protocol', linearIndex, blockIndex, stepIndex }
  }

  return { step: step as Field, type: 'form', linearIndex, blockIndex, stepIndex }
}

export function linearIndexToPosition(
  studyFullInfo: StudyFullInfo,
  linearIndex: number,
): { blockIndex: number; stepIndex: number } {
  let accumulatedIndex = 0

  for (let blockIndex = 0; blockIndex < studyFullInfo.sequence.length; blockIndex++) {
    const block = studyFullInfo.sequence[blockIndex]
    const steps = getBlockSteps(block)
    const nextBlock = studyFullInfo.sequence[blockIndex + 1]
    const copyCount = getCopiedStepsCount(block, nextBlock)
    
    // Each step in this block occupies (1 + copyCount) positions in linear sequence
    const stepStride = 1 + copyCount
    const blockContribution = steps.length * stepStride
    
    // Check if the target index falls within this block's range
    if (linearIndex < accumulatedIndex + blockContribution) {
      const offsetInBlock = linearIndex - accumulatedIndex
      const stepIndex = Math.floor(offsetInBlock / stepStride)
      const positionInStride = offsetInBlock % stepStride
      
      if (positionInStride === 0) {
        // Original step from current block
        return { blockIndex, stepIndex }
      } else {
        // Copied step from next block
        return { blockIndex: blockIndex + 1, stepIndex: positionInStride - 1 }
      }
    }
    
    accumulatedIndex += blockContribution
  }

  throw new Error(`Linear index ${linearIndex} is out of bounds`)
}

export function linearIndexToBlockIndex(
  studyFullInfo: StudyFullInfo,
  linearIndex: number,
): number {
  return linearIndexToPosition(studyFullInfo, linearIndex).blockIndex
}

export function linearIndexToStepIndex(
  studyFullInfo: StudyFullInfo,
  linearIndex: number,
): number {
  return linearIndexToPosition(studyFullInfo, linearIndex).stepIndex
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
