import { FormContext, IFormContext } from './Form.context';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

interface FormProps<T> {
  children?: React.ReactNode;
  initialState: T;
  onSubmit?: (formValues: T) => void;
  inline?: boolean;
}

const FormRoot = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = <T extends object>(props: FormProps<T>) => {
  const [formState, setFormState] = useState<T>(props.initialState);

  const handleOnChange: React.FormEventHandler<HTMLFormElement> = () => {
    // formOnChange, not sure if we need this yet.
  };

  const handleOnSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.stopPropagation();
      event.preventDefault();
      props.onSubmit?.(formState);
    },
    [props.onSubmit, formState]
  );

  const resetForm = () => {
    setFormState(props.initialState);
  };

  const handleOnReset = () => {
    resetForm();
  };

  const onValueChange = useCallback(
    (name: keyof T, value: string | boolean | number | object) => {
      const newFormState = { ...formState, [name]: value };
      setFormState(newFormState);
    },
    [formState, setFormState]
  );

  const contextValue: IFormContext<T> = useMemo(
    () => ({
      form: formState,
      reset: resetForm,
      onValueChange,
      inline: props.inline ?? false
    }),
    [formState, resetForm, onValueChange, props.inline]
  );

  return (
    <FormContext.Provider value={contextValue}>
      <FormRoot
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        onReset={handleOnReset}
      >
        {props.children}
      </FormRoot>
    </FormContext.Provider>
  );
};

export default Form;
