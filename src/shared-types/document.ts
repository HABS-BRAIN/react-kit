import { MongoDocumentFields } from './mongoFields'

export interface ConsentDocument extends MongoDocumentFields {
  _id: string
  name: string
  originalName: string
  filename: string
  size: number
  mimetype: string
  url: string
  hash: string
  r2Key?: string
}
