import { DevicesConfig } from "./device-config"
import { Form } from "./form"
import { Protocol } from "./protocol"
import { Organization } from "./organization"

interface Calibration {
  recordCalibration: boolean
  audio?: ('output' | 'volume' | 'maxHearingHZ')[]
}


export enum StudiesOrderBy {
  TITLE = 'title',
  CREATED_AT = 'createdAt',
}


export interface Study {
  _id: string
  title: string
  description?: string
  protocols: Protocol['_id'][]
  preForms?: Form['_id'][]
  afterForms?: Form['_id'][]
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
