/** Serializable LSL stream row from resolve (for operator UI + selection). */
export type LslStreamDescriptor = {
  uid: string
  name: string
  type: string
  channelCount: number
  nominalSrate: number
  channelFormat: string
  hostname: string
  sourceId: string
}

export type LslVizListAck =
  | { ok: true; streams: LslStreamDescriptor[] }
  | { ok: false; error: string }

/** Client → server: optional discovery wait; server responds via ack only. */
export type LslVizListStreamsPayload = {
  waitTimeSec?: number
}

/** Client-selected visualization intent (UI only today; bridge may log or branch later). */
export type LslVizModeId =
  | 'eeg_signals'
  | 'headset_quality'
  | 'eeg_and_markers'
  | 'raw_debug'

/** Client → server: begin receiving selected stream(s). */
export type LslVizStartPayload = {
  streamUids: string[]
  /** Reserved for future server/UI alignment (e.g. different throttling or routing). */
  vizMode?: LslVizModeId
  /** Cap of server → client emit rate per stream (default 30). */
  maxEmitHz?: number
  /** Seconds to wait when re-resolving by uid (default 3). */
  resolveTimeoutSec?: number
  /** Max samples included in one `LSL_VIZ_BATCH` (default 512). */
  maxSamplesPerBatch?: number
}

/** One row = one multichannel sample (numeric or string channels). */
export type LslVizBatchPayload = {
  streamUid: string
  samples: (number | string)[][]
  timestamps: number[]
}
