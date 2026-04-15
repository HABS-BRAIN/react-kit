import { InputNumberProps, InputProps, RadioGroupProps, SelectProps } from 'antd'
import { CheckboxGroupProps } from 'antd/es/checkbox/Group'
import { SliderSingleProps } from 'antd/es/slider'
import { SequenceBlockCommonProps, Study } from './study'
import { TextAreaProps } from 'antd/es/input'

export interface Option<T = string> {
  label: string
  value: T
}

// export type Field = {
//   label?: string
//   required?: boolean
//   requiredMessage?: string
// } & (
//   | {
//       type: 'slider'
//       config: SliderSingleProps
//     }
//   | {
//       type: 'text'
//       config: InputProps
//     }
//   | {
//       type: 'textarea' 
//       config: TextAreaProps
//     }
//   | {
//       type: 'number'
//       config: InputNumberProps
//     }
//   | {
//       type: 'radio'
//       config: RadioGroupProps
//     }
//   | {
//       type: 'checkbox'
//       config: CheckboxGroupProps
//     }
//   | {
//       type: 'select'
//       config: SelectProps
//     }
// )

export interface Field {
  label?: string
  type: 'slider' | 'textarea' | 'text' | 'number' | 'radio' | 'select' | 'checkbox' | 'goWhenSubmitted'
  config?: SliderSingleProps | InputNumberProps | InputProps | CheckboxGroupProps | RadioGroupProps | SelectProps | TextAreaProps 
  operatorInstructions?: string
}

export interface Form extends SequenceBlockCommonProps {
  fields: Field[]
}
