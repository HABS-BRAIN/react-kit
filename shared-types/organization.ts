
export interface Organization {
  id: string
  name: string
  alias: string
  description: string
  siret: number
  enabled: boolean
  domains: {
    name: string
    verified: boolean
  }[]
}