import { EMOTION_CATEGORIES, MAIN_EMOTION } from './emotions'
import { Form } from './form'
import { Organization } from './organization'
import { Protocol } from './protocol'

export interface Calibration {
  emotinder: Record<MAIN_EMOTION, EMOTION_CATEGORIES[]>
}

export type CurrentPosition = { blockIndex: number; stepIndex: number }

export enum StudiesOrderBy {
  TITLE = 'title',
  CREATED_AT = 'createdAt',
}

export interface SequenceBlockCommonProps {
  _id?: string
  templateId?: string
  title: string
  description?: string
}

export interface StudyFullInfo extends Omit<Study, 'sequence'> {
  sequence: (
    | ({ protocol: Protocol } & {
        type: 'protocol'
        runNextBlockAfterEachStep?: number
        mixSteps?: boolean
        templateId: string
      })
    | ({ form: Form } & {
        type: 'form'
        runNextBlockAfterEachStep?: number
        mixSteps?: boolean
        templateId: string
      })
  )[]
}

export interface Study {
  _id: string
  title: string
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
