import { LinearSequenceItem } from '../extractStudyData'
import { Organization } from './organization'
import { PlaybackState } from './socket'
import { StudyFullInfo } from './study'
import { KeycloakUser } from './user'

export interface ConnectedLabStation {
  labStationId: string
  socketId: string
  disconnectedAt?: Date
  connectedLocalClients?: {
    operator: boolean
    participantControl: boolean
    protocolPlayer: boolean
  }
  currentStep?: LinearSequenceItem
  study?: StudyFullInfo
  operator?: KeycloakUser
  participant?: KeycloakUser
  participantLanguageInterface?: string
  organization?: Organization
  playbackState?: PlaybackState
  currentInteractionIndex?: number
  awaitingParticipantResponse?: boolean //sets to true when step content is finished and there is userInteraction in goNext strategy
}

export interface LabStationVersionCheckResponse {
  repoOwner: string;
  repoName: string;
  currentVersion: string;
  latestVersion: string | null;
  updateAvailable: boolean;
  versionExistsInReleases: boolean;
  releaseTags: string[];
}