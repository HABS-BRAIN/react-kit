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
