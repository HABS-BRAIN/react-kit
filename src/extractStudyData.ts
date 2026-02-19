import { Field } from './shared-types/form'
import { Step } from './shared-types/protocol'
import { CurrentPosition, StudyFullInfo } from './shared-types/study'

export function extractCurrentStep(
  studyFullInfo: StudyFullInfo,
  currentPosition: CurrentPosition,
):
  | {
      step: Step
      type: 'protocol'
    }
  | {
      step: Field
      type: 'form'
    } {
  const { blockIndex, stepIndex } = currentPosition
  const block = studyFullInfo.sequence[blockIndex]
  if (!block) {
    throw new Error(`Block with index ${blockIndex} not found in study sequence`)
  }

  if (block.type === 'protocol') {
    const step = block.protocol.steps[stepIndex]
    if (!step) {
      throw new Error(
        `Step with index ${stepIndex} not found in block at index ${blockIndex}`,
      )
    }
    return { step, type: 'protocol' }
  }

  const step = block.form.fields[stepIndex]
  if (!step) {
    throw new Error(
      `Step with index ${stepIndex} not found in block at index ${blockIndex}`,
    )
  }
  return { step, type: 'form' }
}

export function extractLinearStudySequence(
  studyFullInfo: StudyFullInfo,
): (Step | Field)[] {
  const linearSequence: (Step | Field)[] = []

  const getBlockSteps = (block: StudyFullInfo['sequence'][number]):
    | Step[]
    | Field[] => {
    if (block.type === 'protocol') {
      return block.protocol.steps
    }
    return block.form.fields
  }

  studyFullInfo.sequence.forEach((block, blockIndex) => {
    const steps = getBlockSteps(block)
    const nextBlock = studyFullInfo.sequence[blockIndex + 1]
    const nextSteps = nextBlock ? getBlockSteps(nextBlock) : []
    const copyCount = block.runNextBlockAfterEachStep ?? 0

    steps.forEach((step) => {
      linearSequence.push(step)
      if (copyCount > 0 && nextSteps.length > 0) {
        linearSequence.push(...nextSteps.slice(0, copyCount))
      }
    })
  })

  return linearSequence
}
