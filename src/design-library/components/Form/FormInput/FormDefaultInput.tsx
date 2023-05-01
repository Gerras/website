import React, { InputHTMLAttributes } from 'react';
import Input from '../../Input/Input';
import { useFormContext } from '../Form.context';

interface FormDefaultInput<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'checked'> {
  children?: React.ReactNode;
  name: keyof T;
}

const FormDefaultInput = <T extends object>(props: FormDefaultInput<T>) => {
  const { name, ...restProps } = props;
  const context = useFormContext<T>();

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    context.onValueChange(name, value);
  };

  return (
    <Input
      name={name as string}
      onChange={handleOnChange}
      value={
        context.form[name] as string | number | readonly string[] | undefined
      }
      {...restProps}
    >
      {props.children}
    </Input>
  );
};

export default FormDefaultInput;
