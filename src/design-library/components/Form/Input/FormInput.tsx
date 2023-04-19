import React, { InputHTMLAttributes } from 'react';
import Input from './Input';
import { useFormContext } from '../Form.context';

interface FormInputProps<T extends object>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  children?: React.ReactNode;
  id: keyof T;
}

const FormInput = <T extends object>(props: FormInputProps<T>) => {
  const { id, ...restProps } = props;
  const context = useFormContext<T>();

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    context.onValueChange(id, value);
  };

  return (
    <Input id={id as string} {...restProps} onChange={handleOnChange}>
      {props.children}
    </Input>
  );
};

export default FormInput;
