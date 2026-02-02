import { MAIN_EMOTION } from './emotions'

export type StepMeta = {
  lslMarkerKey?: MarkerKeyWithStart
  customStartMarker?: number
  customFinishMarker?: number
}

export const LSLMarkerKey = {
  ...MAIN_EMOTION,
  BASELINE_EYES_OPEN: 'BASELINE_EYES_OPEN',
  BASELINE_EYES_OPEN_NO_BLINKS: 'BASELINE_EYES_OPEN_NO_BLINKS',
  BASELINE_EYES_CLOSED: 'BASELINE_EYES_CLOSED',
  BLINKS: 'BLINKS',
  MOVE_EYES_LR: 'MOVE_EYES_LR',
  MOVE_EYES_UD: 'MOVE_EYES_UD',
  MOVE_HEAD_LR: 'MOVE_HEAD_LR',
  MOVE_HEAD_UD: 'MOVE_HEAD_UD',
  CLENCH_JAW: 'CLENCH_JAW',
  SWALLOW: 'SWALLOW',
  PLAYBACK: 'PLAYBACK',
  MOVE_ARMS: 'MOVE_ARMS',
} as const

export type LSLMarkerKey = (typeof LSLMarkerKey)[keyof typeof LSLMarkerKey]

export type MarkerKeyWithStart = Exclude<LSLMarkerKey, 'PLAYBACK'>

type StartFinishMarker = { STARTED: number; FINISHED: number } & { dynamic?: boolean }
type PlaybackMarker = { RESUMED: number; PAUSED: number }

export type MarkerKeyIntV1Type = Record<MarkerKeyWithStart, StartFinishMarker> & {
  PLAYBACK: PlaybackMarker
}

export const MarkerKeyIntV1: MarkerKeyIntV1Type = {
  BASELINE_EYES_OPEN: {
    STARTED: 10000,
    FINISHED: 10001,
  },
  BASELINE_EYES_OPEN_NO_BLINKS: {
    STARTED: 10002,
    FINISHED: 10003,
  },
  BASELINE_EYES_CLOSED: {
    STARTED: 10004,
    FINISHED: 10005,
  },
  BLINKS: {
    STARTED: 10006,
    FINISHED: 10007,
  },
  MOVE_EYES_LR: {
    STARTED: 10008,
    FINISHED: 10009,
  },
  MOVE_EYES_UD: {
    STARTED: 10010,
    FINISHED: 10011,
  },
  MOVE_HEAD_LR: {
    STARTED: 10012,
    FINISHED: 10013,
  },
  MOVE_HEAD_UD: {
    STARTED: 10014,
    FINISHED: 10015,
  },
  CLENCH_JAW: {
    STARTED: 10016,
    FINISHED: 10017,
  },
  SWALLOW: {
    STARTED: 10018,
    FINISHED: 10019,
  },
  MOVE_ARMS: {
    STARTED: 10020,
    FINISHED: 10021,
  },
  PLAYBACK: {
    RESUMED: 10051,
    PAUSED: 10052,
  },
  // Emotion markers (XXYYZ):
  // Negative/Neutral category = 10, Positive/Curiosity category = 11
  // Z: even = STARTED (0), odd = FINISHED (1)
  ANGER: {
    dynamic: true,
    STARTED: 10100,
    FINISHED: 10101,
  },
  FEAR: {
    dynamic: true,
    STARTED: 10200,
    FINISHED: 10201,
  },
  DISGUST: {
    dynamic: true,
    STARTED: 10300,
    FINISHED: 10301,
  },
  SADNESS: {
    dynamic: true,
    STARTED: 10400,
    FINISHED: 10401,
  },
  JOY: {
    dynamic: true,
    STARTED: 10500,
    FINISHED: 10501,
  },
  SURPRISE: {
    dynamic: true,
    STARTED: 10600,
    FINISHED: 10061,
  },
  EXCITEMENT: {
    dynamic: true,
    STARTED: 10700,
    FINISHED: 10701,
  },
  RELAXATION: {
    dynamic: true,
    STARTED: 10800,
    FINISHED: 10801,
  },
  GUILT: {
    dynamic: true,
    STARTED: 10900,
    FINISHED: 10901,
  },
  SENSUALITY: {
    dynamic: true,
    STARTED: 11000,
    FINISHED: 11001,
  },
  CURIOSITY: {
    dynamic: true,
    STARTED: 11100,
    FINISHED: 11101,
  },
  NEUTRAL: {
    dynamic: true,
    STARTED: 11200,
    FINISHED: 11201,
  },
}
