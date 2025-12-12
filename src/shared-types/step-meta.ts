import { MAIN_EMOTION } from "./emotions"

export type StepMeta = Record<"lslMarkerKey", LSLMarkerKey> & Record<string, any>

export const LSLMarkerKey = {
  ...MAIN_EMOTION,
  PROTOCOL: 'PROTOCOL',
  BASELINE_EYES_OPEN: 'BASELINE_EYES_OPEN',
  BASELINE_EYES_CLOSED: 'BASELINE_EYES_CLOSED',
} as const

export type LSLMarkerKey = (typeof LSLMarkerKey)[keyof typeof LSLMarkerKey]

export const MarkerKeyIntV1 = {
	PROTOCOL: {
		STARTED: 10000,
		FINISHED: 10001,
	},
	BASELINE_EYES_OPEN: {
		STARTED: 10002,
		FINISHED: 10003,
	},
	BASELINE_EYES_CLOSED: {
		STARTED: 10004,
		FINISHED: 10005,
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

export type MarkerKeyIntV1Type = typeof MarkerKeyIntV1;