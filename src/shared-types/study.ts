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

/**
 * Optional metadata on **top-level** study sequence entries only.
 * Consecutive entries that share `sequenceGroupId` form one group.
 * `sequenceGroupMixOrder` (when true) means block order within that group is randomized when building the linear sequence.
 * Companion blocks (`beforeBlocks` / `afterBlocks`) do not carry these fields.
 */
export type StudySequenceGroupMeta = {
  sequenceGroupId?: string
  sequenceGroupMixOrder?: boolean
}

export interface StudyFullInfo extends MongoDocumentFields, Omit<Study, 'sequence'> {
  templateId?: string
  participantId?: string
  sequence: (
    | ({ protocol: Protocol } & {
        type: 'protocol'
        beforeBlocks?: SequenceBlockItem[]
        afterBlocks?: SequenceBlockItem[]
        mixSteps?: boolean
        templateId: string
        events?: any[]
      } & StudySequenceGroupMeta)
    | ({ form: Form } & {
        type: 'form'
        beforeBlocks?: SequenceBlockItem[]
        afterBlocks?: SequenceBlockItem[]
        mixSteps?: boolean
        templateId: string
        events?: any[]
      } & StudySequenceGroupMeta)
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
  // In templates this points to the referenced block template id.
  // In participant snapshots it can be remapped to the generated block id.
  _id: Protocol['_id'] | Form['_id']
  mixSteps?: boolean
}

export interface Study {
  _id: string
  title: string
  children?: Study['_id'][]
  description?: string
  sequence: (SequenceBlockItem & {
    beforeBlocks?: SequenceBlockItem[]
    afterBlocks?: SequenceBlockItem[]
  } & StudySequenceGroupMeta)[]
  belongsToOrganization: Organization['id'][]
  /** MongoDB ConsentDocument ids the participant must sign before/during the study */
  participantShouldSign?: string[]
}