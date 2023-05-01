import { InputTypes, formInputComponentMap } from './Input.utils';
import React, { ComponentType, InputHTMLAttributes } from 'react';

export interface FormInputProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'checked'> {
  children?: React.ReactNode;
  name: keyof T;
}

const FormInput = <T extends object>(props: FormInputProps<T>) => {
  const { type, children, name, ...restProps } = props;
  const componentType = (props.type ?? 'text') as InputTypes;
  const InputComponent = formInputComponentMap[componentType] as ComponentType<
    FormInputProps<T>
  >;
  return (
    <InputComponent name={name} type={type} {...restProps}>
      {children}
    </InputComponent>
  );
};

export default FormInput;
