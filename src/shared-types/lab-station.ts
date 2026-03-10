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
  organization?: Organization
  playbackState?: PlaybackState

  currentInteractionIndex?: number
  isPlayingMedia?: boolean
}
