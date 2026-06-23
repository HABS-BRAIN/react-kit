import type { SliderSingleProps } from 'antd'
import type { Field } from './form'
import { Media } from './media'
import { CSSProperties } from 'react'
import { KeycloakUser } from './user'
import { StepMeta } from './step-meta'
import { SequenceBlockCommonProps } from './study'

export enum ProtocolTemplate {
  DEFAULT = 'DEFAULT',
  EMOTINDER = 'EMOTINDER',
}

export const DEFAULT_STEP_CONTENT_STYLE: CSSProperties = {
  backgroundColor: '#000000',
  color: '#FFFFFF',
}
export interface Protocol extends SequenceBlockCommonProps {
  template?: ProtocolTemplate
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
  meta?: StepMeta
  operatorInstructions?: string
}

type TextContent = {
  type: 'text'
  text: string
}

type ImageContent = {
  type: 'image'
  image: Media
  // alt?: string
}

type AudioContent = {
  type: 'audio'
  audio: Media
  maxDuration?: number
}

type VideoContent = {
  type: 'video'
  video: Media
  maxDuration?: number
}

type PersonalizedContent = {
  type: 'personalized'
  personalized: {
    mediaType: 'image' | 'audio' | 'video'
    mediaPerEmotion: number
  }
}

type ExternalWebpageContent = {
  type: 'externalWebpage'
  url: string
  /** Optional message shown on player screen while external window is active */
  placeholderText?: string
}

export type StepContent = (
  | TextContent
  | ImageContent
  | AudioContent
  | VideoContent
  | PersonalizedContent
  | ExternalWebpageContent
) & {
  style?: CSSProperties
}

type GoNextAutoplay = {
  type: 'autoplay'
  duration: number
  notifyStepEnds?: boolean
  notifyStepStarts?: boolean
  isCountdownPresented?: boolean
}

type GoNextWhenMediaEnds = {
  type: 'mediaEnds'
}

export type GoNextSliders = {
  type: 'sliders'
  instruction?: string
  sliders: {
    instruction?: string
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

/** Frozen copy of a form template at the time the protocol step was authored. */
export type GoNextFormSnapshot = {
  title: string
  description?: string
  fields: Field[]
  /** Id of the template used when the snapshot was taken (for display / re-selection). */
  sourceFormId?: string
}

export type GoNextForm = {
  type: 'form'
  snapshot: GoNextFormSnapshot
}

export type GoNextUserInteraction = {
  type: 'userInteraction'
  userInteraction: (GoNextSliders | GoNextCheckbox | GoNextForm)[]
}

export type GoNextOperatorInteraction = {
  type: 'operatorInteraction'
  openButtonLabel?: string
  completeButtonLabel?: string
}

export type GoNextStrategy =
  | GoNextAutoplay
  | GoNextWhenMediaEnds
  | GoNextUserInteraction
  | GoNextOperatorInteraction
