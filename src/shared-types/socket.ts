import { Socket as IOSocket } from 'socket.io'
import { LinearSequenceItem } from '../extractStudyData'
import { ConnectedLabStation } from './lab-station'
import { Organization } from './organization'
import { GoNextCheckbox, GoNextSliders } from './protocol'
import { StudyFullInfo } from './study'
import { KeycloakUser } from './user'

export type SelectedParticipantPayload = {
  participant: KeycloakUser
  organization: Organization
}

export type PrefetchedMediaInfoPayload = {
  filename: string
  stepIndex: number
  totalSteps: number
}

export type EventSubscription =
  | { namespace: '/protocol-player'; event: keyof ProtocolPlayerClientEvents }
  | { namespace: '/operator'; event: keyof OperatorClientEvents }
  | {
      namespace: '/remote-participant-control'
      event: keyof RemoteParticipantClientEvents
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
  NEW_STEP: (newStep: LinearSequenceItem) => void
}
interface CommonClientEvents {
  getSessionState: (
    callback: (sessionState: Omit<ConnectedLabStation, 'socketId'>) => void,
  ) => void
}

interface DevEvents {
  dev: () => void
  createOutlet: () => void
}
export interface OperatorClientEvents extends CommonClientEvents, DevEvents {
  participantSelected: ({ participant, organization }: SelectedParticipantPayload) => void
  setParticipantLanguage: (language: string) => void
  studySelected: ({
    study,
    currentStep,
  }: {
    study: StudyFullInfo
    currentStep: LinearSequenceItem | undefined
  }) => void
  playbackControl: (newPlaybackState: PlaybackState) => void
  startFakeDeviceStream: () => void
  stopFakeDeviceStream: () => void
}

export interface OperatorServerEvents extends CommonServerEvents {
  ON_CONNECTIONS_CHANGED: (connections: Connections) => void
  PARTICIPANT_CONFIRMED_IDENTITY: (data: SelectedParticipantPayload) => void
  STEP_MEDIA_PREFETCHED: (info: PrefetchedMediaInfoPayload) => void
  GET_SESSION_STATE: () => void
  DISPLAY_PARTICIPANT_RESPONSE: ({
    currentStep,
    value,
  }: {
    currentStep: LinearSequenceItem
    value: any
  }) => void
}

export interface ProtocolPlayerClientEvents extends CommonClientEvents {
  participantLaunchStudy: (currentStep: LinearSequenceItem) => void
  audioStarted: (data: any) => void
  audioEnded: (data: any) => void
  videoStarted: (data: any) => void
  videoEnded: (data: any) => void
}

export interface ProtocolPlayerServerEvents extends CommonServerEvents {
  PLAY_STEP_ENDS_SOUND: () => void
  PLAY_STEP_STARTS_SOUND: () => void
  PARTICIPANT_SELECTED: (data: SelectedParticipantPayload) => void
  STUDY_SELECTED_BY_OPERATOR: ({
    study,
    currentStep,
  }: {
    study: StudyFullInfo
    currentStep?: LinearSequenceItem
  }) => void
  PRESENT_REPLY_FORM: () => void
  USER_INTERACTION_COMPLETED: (index: number) => void
  OPERATOR_SET_LANGUAGE: (language: string) => void
}

export type RemoteParticipantServerEvents = ProtocolPlayerServerEvents

export interface RemoteParticipantClientEvents
  extends InteractionCompletedEvents, CommonClientEvents {
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
