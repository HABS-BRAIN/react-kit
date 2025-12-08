import { Socket as IOSocket } from 'socket.io';
import { KeycloakUser } from './user';
import { Organization } from './organization';
import { Protocol, Step } from './protocol';

export type SelectedParticipantPayload = {
  participant: KeycloakUser;
  organization: Organization;
};

export type PrefetchedMediaInfoPayload = {
  filename: string;
  stepIndex: number;
  totalSteps: number;
};

export type PlaybackState = 'playing' | 'paused' | 'finished' | 'ready';

export type EventPayload<T> = T extends (...args: infer P) => void
  ? P[0]
  : never;

export type OperatorSocket = IOSocket<
  OperatorClientEvents,
  OperatorServerEvents
>;
export type ProtocolPlayerSocket = IOSocket<
  ProtocolPlayerClientEvents,
  ProtocolPlayerServerEvents
>;
export type RemoteParticipantSocket = IOSocket<
  RemoteParticipantClientEvents,
  RemoteParticipantServerEvents
>;

export interface Connections {
  '/operator': string | null;
  '/protocol-player': string | null;
  '/remote-participant-control': string | null;
}

export type NamespaceClientEventsMap = {
  '/operator': OperatorClientEvents;
  '/protocol-player': ProtocolPlayerClientEvents;
  '/remote-participant-control': RemoteParticipantClientEvents;
};

interface CommonServerEvents {
  PLAYBACK_STATE_CHANGED: (playbackState: PlaybackState) => void;
  NEW_STEP: (newStep: { step: Step; index: number}) => void
}

export interface OperatorClientEvents {
  participantSelected: ({
    participant,
    organization,
  }: SelectedParticipantPayload) => void;
  getConnections: () => void;
  protocolSelected: (protocol: Protocol) => void;
  playbackControl: (newPlaybackState: PlaybackState) => void;
  startFakeDeviceStream: () => void;
  stopFakeDeviceStream: () => void;
}

export interface OperatorServerEvents extends CommonServerEvents {
  ON_CONNECTIONS_CHANGED: (connections: Connections) => void;
  PARTICIPANT_CONFIRMED_IDENTITY: (data: SelectedParticipantPayload) => void;
  STEP_MEDIA_PREFETCHED: (info: PrefetchedMediaInfoPayload) => void;
  GET_SESSION_STATE: () => void;
}

export interface ProtocolPlayerClientEvents {
  participantLaunchProtocol: () => void;
  audioStarted: (data: any) => void;
  audioEnded: (data: any) => void;
  videoStarted: (data: any) => void;
  videoEnded: (data: any) => void;
}

export interface ProtocolPlayerServerEvents extends CommonServerEvents {
  PLAY_STEP_ENDS_SOUND: () => void;
  PLAY_STEP_STARTS_SOUND: () => void;
  PARTICIPANT_SELECTED: (data: SelectedParticipantPayload) => void;
  PROTOCOL_SELECTED_BY_OPERATOR: (protocol: Protocol) => void;
  PRESENT_REPLY_FORM: () => void
}

export type RemoteParticipantServerEvents = ProtocolPlayerServerEvents;

export interface RemoteParticipantClientEvents {
  confirmParticipantIdentity: (data: SelectedParticipantPayload) => void;
  sliderInputValueChange: (data: any) => void;
  sliderInputValueChangeComplete: (data: any) => void;
  submitSlidersValues: (data: any) => void;
  submitCheckboxValues: (data: any) => void;
  // participantLaunchProtocol: (data: any) => void; //I removed this button from tablet. Protocol should be started by operator from the protocol player browser. Otherwise video/audio will not be playing as this window stays untouched
}
