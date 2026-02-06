import { Organization } from './organization'
import { CurrentPosition, StudyFullInfo } from './study'
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
  currentPosition?: CurrentPosition
  study?: StudyFullInfo
  operatorId?: string
  participant?: KeycloakUser
  organization?: Organization
}
