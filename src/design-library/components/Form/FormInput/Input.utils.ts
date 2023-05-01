import { ComponentType } from 'react';
import FormDefaultInput from './FormDefaultInput';
import { FormInputProps } from './FormInput';
import FormRadioInput from './FormRadioInput';

export type InputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export const formInputComponentMap: Record<
  InputTypes,
  ComponentType<FormInputProps<object>>
> = {
  'datetime-local': FormDefaultInput,
  button: FormDefaultInput,
  checkbox: FormDefaultInput,
  color: FormDefaultInput,
  date: FormDefaultInput,
  email: FormDefaultInput,
  file: FormDefaultInput,
  hidden: FormDefaultInput,
  image: FormDefaultInput,
  month: FormDefaultInput,
  number: FormDefaultInput,
  password: FormDefaultInput,
  radio: FormRadioInput,
  range: FormDefaultInput,
  reset: FormDefaultInput,
  search: FormDefaultInput,
  submit: FormDefaultInput,
  tel: FormDefaultInput,
  text: FormDefaultInput,
  time: FormDefaultInput,
  url: FormDefaultInput,
  week: FormDefaultInput
};
