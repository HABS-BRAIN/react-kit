import { DevicesConfig } from './device-config'
import { Form } from './form'
import { Protocol } from './protocol'
import { Organization } from './organization'

interface Calibration {
  recordCalibration: boolean
  audio?: ('output' | 'volume' | 'maxHearingHZ')[]
}

export type CurrentPosition = { blockIndex: number; stepIndex: number }

export enum StudiesOrderBy {
  TITLE = 'title',
  CREATED_AT = 'createdAt',
}

export interface SequenceBlockCommonProps {
  _id: string
  title: string
  description?: string
}

export interface StudyFullInfo extends Omit<Study, 'sequence'> {
  sequence: (
    | ({ protocol: Protocol } & { type: 'protocol' })
    | ({ form: Form } & { type: 'form' })
  )[]
}

export interface Study {
  _id: string
  title: string
  description?: string
  sequence: {
    type: 'protocol' | 'form'
    _id: Protocol['_id'] | Form['_id']
    runNextBlockAfterEachStep?: boolean
  }[]
  belongsToOrganization: Organization['id'][]
  devicesConfig?: Partial<DevicesConfig> //future feature
  calibration?: Calibration //future feature
}

// export interface StudyFullInfo extends Omit<Study, 'belongsToOrganization' | 'protocols' | 'preForms' | 'afterForms'> {
//   belongsToOrganization: Organization[]
//   protocols: Protocol[]
//   preForms?: Form[]
//   afterForms?: Form[]
// }
