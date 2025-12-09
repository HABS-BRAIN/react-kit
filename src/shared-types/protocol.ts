import type { SliderSingleProps } from 'antd'
import { ProtocolMedia } from './media'
import { CSSProperties } from 'react'
import { KeycloakUser } from './user'

export const DEFAULT_STEP_CONTENT_STYLE: CSSProperties = {
  backgroundColor: '#000000',
  color: '#FFFFFF',
}
export interface Protocol {
  _id: string
  title: string
  description?: string
  template?: boolean //if some step content type is personalized, then template is true )
  templateId?: string //id of the protocol which was used as template
  belongsToParticipant?: string //if protocol is personalized for participant, then this field is set
  participant?: KeycloakUser
  estimatedDuration: {
    total: number
    videos: number
    audios: number
    autoplay: number
  }
  steps: Step[]
}

export type Step = {
  content: StepContent
  goNext: GoNextStrategy
  meta?: any
}

type TextContent = {
  type: 'text'
  text: string
}

type ImageContent = {
  type: 'image'
  image: ProtocolMedia
  // alt?: string
}

type AudioContent = {
  type: 'audio'
  audio: ProtocolMedia
  maxDuration?: number
}

type VideoContent = {
  type: 'video'
  video: ProtocolMedia
  maxDuration?: number
}

type PersonalizedContent = {
  type: 'personalized'
  personalized: {
    mediaType: 'image' | 'audio' | 'video'
    mediaPerCategory: number
  }
}

export type StepContent = (
  | TextContent
  | ImageContent
  | AudioContent
  | VideoContent
  | PersonalizedContent
) & {
  style?: CSSProperties
}

type GoNextAutoplay = {
  type: 'autoplay'
  duration: number
  notifyStepEnds: true
  notifyStepStarts: true
  isCountdownPresented: boolean
}

type GoNextWhenMediaEnds = {
  type: 'mediaEnds'
}

export type GoNextSliders = {
  type: 'sliders'
  sliders: {
    min?: number //default is 0
    max?: number //default is 100
    defaultValue?: number //default is 50
    step?: number //default is 1
    marks: SliderSingleProps['marks']
  }[]
  submitButtonText?: string //default is "Submit"
}

export type GoNextCheckbox = {
  type: 'checkbox'
}

export type GoNextStrategy = GoNextAutoplay | GoNextWhenMediaEnds | GoNextSliders | GoNextCheckbox
