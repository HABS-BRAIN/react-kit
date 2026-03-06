import { EMOTION_CATEGORIES, EMOTION_SUBCATEGORIES } from './emotions'
import { MongoDocumentFields } from './mongoFields'

export interface Media extends MongoDocumentFields {
  _id: string
  filename: string
  originalName: string
  duration?: number // For audio and video files (in seconds)
  size: number // Size in bytes
  mimetype: string
  url: string
  hash: string
  r2Key: string
  thumbnail?: string // Thumbnail filename for videos/images
  tags?: Partial<typeof EMOTION_SUBCATEGORIES>
  category?: keyof typeof EMOTION_CATEGORIES
}
