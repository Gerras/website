import { FormContext, IFormContext } from './Form.context';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

interface FormProps<T> {
  children?: React.ReactNode;
  initialState: T;
  onSubmit?: (formValues: T) => void;
}

// type InputEvent = HTMLElement;

const FormRoot = styled.form``;

const Form = <T extends object>(props: FormProps<T>) => {
  const [formState, setFormState] = useState<T>(props.initialState);
  const handleOnChange: React.FormEventHandler<HTMLFormElement> = (event) => {
    console.log('change', event);
    console.log('currentTarget', event.currentTarget);
    console.log('target', (event.target as any).value);
  };
  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log('submit', event);
    props.onSubmit?.(formState);
  };
  const resetForm = () => {
    setFormState(props.initialState);
  };

  const onValueChange = (
    name: keyof T,
    value: string | boolean | number | object
  ) => {
    const newFormState = { ...formState, [name]: value };
    console.log('newFORMSTATE', newFormState);
    setFormState(newFormState);
  };

  const contextValue: IFormContext<T> = useMemo(
    () => ({
      form: formState,
      reset: resetForm,
      onValueChange
    }),
    []
  );

  return (
    <FormContext.Provider value={contextValue}>
      <FormRoot onChange={handleOnChange} onSubmit={handleOnSubmit}>
        {props.children}
      </FormRoot>
    </FormContext.Provider>
  );
};

export default Form;
