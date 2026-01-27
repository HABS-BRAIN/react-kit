import { InputNumberProps, InputProps, SelectProps } from 'antd'
import { CheckboxGroupProps } from 'antd/es/checkbox/Group'
import { SliderSingleProps } from 'antd/es/slider'
import { SequenceBlockCommonProps, Study } from './study'

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
      config: SliderSingleProps
    }
  | {
      type: 'textarea' | 'text' | 'number'
      config: InputProps
    }
  | {
      type: 'number'
      config: InputNumberProps
    }
  | {
      type: 'radio'
    }
  | {
      type: 'checkbox'
      config: CheckboxGroupProps
    }
  | {
      type: 'select'
      config: SelectProps
    }
)

export interface Form extends SequenceBlockCommonProps {
  fields: Field[]
}
