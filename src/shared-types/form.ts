import { SequenceBlockCommonProps, Study } from "./study"

export interface Option<T = string> {
  label: string
  value: T
}

export type Field = {
  label?: string
  required?: boolean
  requiredMessage?: string
} & (
  | {
      type: 'slider'
      initialValue?: number //NaN
      evaluate?: {
        left: string
        right: string
      }
      placeholder?: string
    }
  | {
      type: 'textarea' | 'text' | 'number' | 'email'
      placeholder?: string
      initialValue?: string
    }
  | {
      type: 'radio'
      options: Option[]
      placeholder?: string
      initialValue?: string
    }
  | {
      type: 'select'
      options: Option[]
      placeholder?: string
      initialValue?: string[]
    }
)


export interface Form extends SequenceBlockCommonProps {
  fields: Record<string, Field>
}