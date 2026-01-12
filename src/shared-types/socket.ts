import { Socket as IOSocket } from 'socket.io'
import { KeycloakUser } from './user'
import { Organization } from './organization'
import { Protocol, Step, GoNextSliders, GoNextCheckbox } from './protocol'
import { CurrentPosition, StudyFullInfo } from './study'
import { Field } from './form'

export type SelectedParticipantPayload = {
  participant: KeycloakUser
  organization: Organization
}

export type PrefetchedMediaInfoPayload = {
  filename: string
  stepIndex: number
  totalSteps: number
}

export type PlaybackState = 'playing' | 'paused' | 'finished' | 'ready'

export type EventPayload<T> = T extends (...args: infer P) => void ? P[0] : never

export type OperatorSocket = IOSocket<OperatorClientEvents, OperatorServerEvents>
export type ProtocolPlayerSocket = IOSocket<
  ProtocolPlayerClientEvents,
  ProtocolPlayerServerEvents
>
export type RemoteParticipantSocket = IOSocket<
  RemoteParticipantClientEvents,
  RemoteParticipantServerEvents
>

export interface Connections {
  '/operator': string | null
  '/protocol-player': string | null
  '/remote-participant-control': string | null
}

export type NamespaceClientEventsMap = {
  '/operator': OperatorClientEvents
  '/protocol-player': ProtocolPlayerClientEvents
  '/remote-participant-control': RemoteParticipantClientEvents
}

interface CommonServerEvents {
  PLAYBACK_STATE_CHANGED: (playbackState: PlaybackState) => void
  NEW_STEP: (newStep: { step: Step | Field; position: CurrentPosition }) => void
}

export interface OperatorClientEvents {
  participantSelected: ({ participant, organization }: SelectedParticipantPayload) => void
  getConnections: () => void
  protocolSelected: (protocol: Protocol) => void
  studySelected: (study: StudyFullInfo) => void
  playbackControl: (newPlaybackState: PlaybackState) => void
  startFakeDeviceStream: () => void
  stopFakeDeviceStream: () => void
}

export interface OperatorServerEvents extends CommonServerEvents {
  ON_CONNECTIONS_CHANGED: (connections: Connections) => void
  PARTICIPANT_CONFIRMED_IDENTITY: (data: SelectedParticipantPayload) => void
  STEP_MEDIA_PREFETCHED: (info: PrefetchedMediaInfoPayload) => void
  GET_SESSION_STATE: () => void
}

export interface ProtocolPlayerClientEvents {
  participantLaunchStudy: (position: CurrentPosition) => void
  audioStarted: (data: any) => void
  audioEnded: (data: any) => void
  videoStarted: (data: any) => void
  videoEnded: (data: any) => void
}

export interface ProtocolPlayerServerEvents extends CommonServerEvents {
  PLAY_STEP_ENDS_SOUND: () => void
  PLAY_STEP_STARTS_SOUND: () => void
  PARTICIPANT_SELECTED: (data: SelectedParticipantPayload) => void
  STUDY_SELECTED_BY_OPERATOR: (studyFullInfo: StudyFullInfo) => void
  PRESENT_REPLY_FORM: () => void
  USER_INTERACTION_COMPLETED: (index: number) => void
}

export type RemoteParticipantServerEvents = ProtocolPlayerServerEvents

export interface RemoteParticipantClientEvents extends InteractionCompletedEvents {
  confirmParticipantIdentity: (data: SelectedParticipantPayload) => void
  sliderInputValueChange: (data: any) => void
  sliderInputValueChangeComplete: (data: any) => void
  formValueSubmitted: (data: any) => void
  // participantLaunchProtocol: (data: any) => void; //I removed this button from tablet. Protocol should be started by operator from the protocol player browser. Otherwise video/audio will not be playing as this window stays untouched
}

interface InteractionCompletedEvents {
  submitSlidersValues: (data: any) => void
  submitCheckboxValues: (data: any) => void
}

export const INTERACTION_COMPLETED_EVENT: {
  [K in GoNextSliders['type'] | GoNextCheckbox['type']]: keyof InteractionCompletedEvents
} = {
  sliders: 'submitSlidersValues',
  checkbox: 'submitCheckboxValues',
}
