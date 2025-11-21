export enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc',
}
export interface GetListDTO {
  skip: number
  limit: number
  oderDirection?: OrderDirection
  search?: string
}
