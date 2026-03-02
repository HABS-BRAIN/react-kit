import { EMOTION_CATEGORIES, MAIN_EMOTION } from './emotions'
import { Form } from './form'
import { Organization } from './organization'
import { Protocol, ProtocolTemplate } from './protocol'
import { KeycloakUser } from './user'

export interface Calibration {
  [ProtocolTemplate.EMOTINDER]: Record<MAIN_EMOTION, EMOTION_CATEGORIES[]>
}

export type CurrentPosition = number

export enum StudiesOrderBy {
  TITLE = 'title',
  CREATED_AT = 'createdAt',
}

export interface SequenceBlockCommonProps {
  _id: string
  title: string
  description?: string
  templateId?: string
}

export interface StudyFullInfo extends Omit<Study, 'sequence'> {
  sequence: (
    | ({ protocol: Protocol } & {
        type: 'protocol'
        runNextBlockAfterEachStep?: number
        mixSteps?: boolean
        templateId: string
        events?: any[]
      })
    | ({ form: Form } & {
        type: 'form'
        runNextBlockAfterEachStep?: number
        mixSteps?: boolean
        templateId: string
        events?: any[]
      })
  )[]
}

export interface CompletedStudy extends StudyFullInfo {
  operator: KeycloakUser
  startTime: string
  pushedEventsToLSL: any[]
  participantId: string //keycloak user id of the participant
}

export interface Study {
  _id: string
  title: string
  children?: Study['_id'][]
  description?: string
  sequence: {
    type: 'protocol' | 'form'
    _id: Protocol['_id'] | Form['_id']
    runNextBlockAfterEachStep?: number
    mixSteps?: boolean
  }[]
  belongsToOrganization: Organization['id'][]
}

// export interface StudyFullInfo extends Omit<Study, 'belongsToOrganization' | 'protocols' | 'preForms' | 'afterForms'> {
//   belongsToOrganization: Organization[]
//   protocols: Protocol[]
//   preForms?: Form[]
//   afterForms?: Form[]
// }
