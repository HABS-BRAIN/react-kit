import { CurrentPosition, StudyFullInfo } from "./shared-types/study"

export function extractCurrentStep(studyFullInfo: StudyFullInfo, currentPosition: CurrentPosition) {
  const { blockIndex, stepIndex } = currentPosition
  const block = studyFullInfo.sequence[blockIndex]
  if (!block) {
    throw new Error(`Block with index ${blockIndex} not found in study sequence`)
  }
  const steps =
    block.type === 'protocol' ? block.protocol.steps : block.form.fields
  const step = steps[stepIndex]
  if (!step) {
    throw new Error(
      `Step with index ${stepIndex} not found in block at index ${blockIndex}`,
    )
  }
  return step
}