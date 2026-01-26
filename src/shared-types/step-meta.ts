import { MAIN_EMOTION } from './emotions'

export type StepMeta = { lslMarkerKey?: MarkerKeyWithStart } & Record<string, any>

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
  STUDY_BLOCK: 'STUDY_BLOCK',
  BLOCK_STEP: 'BLOCK_STEP',
  PLAYBACK: 'PLAYBACK',
} as const

export type LSLMarkerKey = (typeof LSLMarkerKey)[keyof typeof LSLMarkerKey]

export type MarkerKeyWithStart = Exclude<LSLMarkerKey, 'PLAYBACK'>

type StartFinishMarker = { STARTED: number; FINISHED: number }
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
    FINISHED: 100011,
  },
  MOVE_HEAD_LR: {
    STARTED: 10012,
    FINISHED: 10013,
  },
  MOVE_HEAD_UD: {
    STARTED: 10014,
    FINISHED: 100015,
  },
  CLENCH_JAW: {
    STARTED: 10016,
    FINISHED: 10017,
  },
  SWALLOW: {
    STARTED: 10018,
    FINISHED: 100019,
  },
  STUDY_BLOCK: {
    STARTED: 10020,
    FINISHED: 10021,
  },
  PLAYBACK: {
	RESUMED: 10022,
	PAUSED: 100023,
  },
  BLOCK_STEP: {
    STARTED: 10024,
    FINISHED: 10025,
  },
  // Emotion markers (XXYYZ):
  // Negative/Neutral category = 10, Positive/Curiosity category = 11
  // Z: even = STARTED (0), odd = FINISHED (1)
  ANGER: {
    STARTED: 10100,
    FINISHED: 10101,
  },
  FEAR: {
    STARTED: 10200,
    FINISHED: 10201,
  },
  DISGUST: {
    STARTED: 10300,
    FINISHED: 10301,
  },
  SADNESS: {
    STARTED: 10400,
    FINISHED: 10401,
  },
  JOY: {
    STARTED: 11050,
    FINISHED: 11051,
  },
  SURPRISE: {
    STARTED: 11060,
    FINISHED: 11061,
  },
  EXCITEMENT: {
    STARTED: 11070,
    FINISHED: 11071,
  },
  RELAXATION: {
    STARTED: 11080,
    FINISHED: 11081,
  },
  GUILT: {
    STARTED: 10900,
    FINISHED: 10901,
  },
  SENSUALITY: {
    STARTED: 11100,
    FINISHED: 11101,
  },
  CURIOSITY: {
    STARTED: 11110,
    FINISHED: 11111,
  },
  NEUTRAL: {
    STARTED: 11200,
    FINISHED: 11201,
  },
}
