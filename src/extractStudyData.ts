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
  const linearSequence = extractLinearStudySequence(studyFullInfo)
  const item = linearSequence[linearIndex]
  
  if (!item) {
    throw new Error(
      `Linear index ${linearIndex} is out of bounds (0-${linearSequence.length - 1})`,
    )
  }

  if (item.type === 'protocol') {
    return {
      step: item.step as Step,
      type: 'protocol',
      linearIndex: item.linearIndex,
      blockIndex: item.blockIndex,
      stepIndex: item.stepIndex,
    }
  }

  return {
    step: item.step as Field,
    type: 'form',
    linearIndex: item.linearIndex,
    blockIndex: item.blockIndex,
    stepIndex: item.stepIndex,
  }
}

export function linearIndexToPosition(
  studyFullInfo: StudyFullInfo,
  linearIndex: number,
): { blockIndex: number; stepIndex: number } {
  const linearSequence = extractLinearStudySequence(studyFullInfo)
  const item = linearSequence[linearIndex]
  
  if (!item) {
    throw new Error(`Linear index ${linearIndex} is out of bounds`)
  }
  
  return { blockIndex: item.blockIndex, stepIndex: item.stepIndex }
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

export type LinearSequenceItem = {
  step: Step | Field
  type: 'protocol' | 'form'
  blockIndex: number
  stepIndex: number
  linearIndex: number
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

    steps.forEach((step, stepIndex) => {
      // Add the original step from current block
      linearSequence.push({
        step,
        type: block.type,
        blockIndex,
        stepIndex,
        linearIndex: linearIndex++,
      })

      // Add copied steps from next block
      if (copyCount > 0 && nextBlock) {
        const nextSteps = getBlockSteps(nextBlock)
        for (let i = 0; i < Math.min(copyCount, nextSteps.length); i++) {
          linearSequence.push({
            step: nextSteps[i],
            type: nextBlock.type,
            blockIndex: blockIndex + 1,
            stepIndex: i,
            linearIndex: linearIndex++,
          })
        }
      }
    })
  })

  return linearSequence
}
