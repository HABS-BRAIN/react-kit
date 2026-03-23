import { EMOTION_CATEGORIES, MAIN_EMOTION } from './emotions'
import { Form } from './form'
import { MongoDocumentFields } from './mongoFields'
import { Organization } from './organization'
import { Protocol, ProtocolTemplate } from './protocol'
import { KeycloakUser } from './user'
export interface Calibration {
  [ProtocolTemplate.EMOTINDER]: Record<MAIN_EMOTION, EMOTION_CATEGORIES[]>
}

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

export interface StudyFullInfo extends MongoDocumentFields, Omit<Study, 'sequence'> {
  templateId?: string
  participantId?: string
  sequence: (
    | ({ protocol: Protocol } & {
        type: 'protocol'
        runNextBlockForEachStep?: number // How many next blocks should run for each step
        nextBlockExecutes?: 'before' | 'after'
        beforeBlocks?: SequenceBlockItem[]
        afterBlocks?: SequenceBlockItem[]
        mixSteps?: boolean
        templateId: string
        events?: any[]
      })
    | ({ form: Form } & {
        type: 'form'
        runNextBlockForEachStep?: number // How many next blocks should run for each step
        nextBlockExecutes?: 'before' | 'after'
        beforeBlocks?: SequenceBlockItem[]
        afterBlocks?: SequenceBlockItem[]
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

export interface SequenceBlockItem {
  type: 'protocol' | 'form'
  _id: Protocol['_id'] | Form['_id']
  mixSteps?: boolean
}

export interface Study {
  _id: string
  title: string
  children?: Study['_id'][]
  description?: string
  sequence: (SequenceBlockItem & {
    runNextBlockForEachStep?: number
    nextBlockExecutes?: 'before' | 'after'
    beforeBlocks?: SequenceBlockItem[]
    afterBlocks?: SequenceBlockItem[]
  })[]
  belongsToOrganization: Organization['id'][]
}