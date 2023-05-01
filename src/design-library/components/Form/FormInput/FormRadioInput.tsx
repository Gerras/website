import React, { InputHTMLAttributes } from 'react';
import Input from '../../Input/Input';
import { useFormContext } from '../Form.context';

interface FormRadioInputProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'checked'> {
  children?: React.ReactNode;
  name: keyof T;
}

const FormRadioInput = <T extends object>(props: FormRadioInputProps<T>) => {
  const { name, ...restProps } = props;
  const context = useFormContext<T>();

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    context.onValueChange(name, value);
  };

  const checked = context.form[name] === restProps.value;

  return (
    <Input
      name={name as string}
      onChange={handleOnChange}
      {...restProps}
      checked={checked}
    >
      {props.children}
    </Input>
  );
};

export default FormRadioInput;
