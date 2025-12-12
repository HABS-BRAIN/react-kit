import { MAIN_EMOTION } from "./emotions"

export type StepMeta = Record<"lslMarkerKey", LSLMarkerKey> & Record<string, any>

export const LSLMarkerKey = {
  ...MAIN_EMOTION,
//   PROTOCOL: 'PROTOCOL',
  BASELINE_EYES_OPEN: 'BASELINE_EYES_OPEN',
  BASELINE_EYES_CLOSED: 'BASELINE_EYES_CLOSED',
} as const

export type LSLMarkerKey = (typeof LSLMarkerKey)[keyof typeof LSLMarkerKey]