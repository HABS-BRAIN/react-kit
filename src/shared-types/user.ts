export interface KeycloakUser {
  email: string
  emailVerified: boolean
  enabled: boolean
  firstName: string
  id: string
  lastName: string
  username: string
}

//for operator guides
export enum GUIDE_PAGE {
  SETTING_UP_PARTICIPANT = 'SETTING_UP_PARTICIPANT',
}