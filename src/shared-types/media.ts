import { ObjectId } from "mongoose"
import { EMOTION_SUBCATEGORIES } from "./emotions"

export interface Media extends ProtocolMedia {
  size: number // Size in bytes
  mimetype: string
  thumbnail?: string // Thumbnail filename for videos/images
  tags?: Partial<typeof EMOTION_SUBCATEGORIES>
  category?: string
}

export interface ProtocolMedia {
  _id: ObjectId
  filename: string
  originalName: string
  duration?: number // For audio and video files (in seconds)
}
