import { createContext, useContext } from 'react';

export interface IFormContext<T extends object> {
  form: T;
  reset: () => void;
  onValueChange: (
    name: keyof T,
    value: string | boolean | number | object
  ) => void;
  inline: boolean;
}

export const FormContext = createContext<IFormContext<object> | null>(null);

export const useFormContext = <T extends object>() => {
  const context = useContext<IFormContext<T> | null>(
    FormContext as React.Context<IFormContext<T> | null>
  );
  if (!context) {
    throw new Error(
      'Do no use useFormContext without the component being wrapped in a FormContext.Provider'
    );
  }

  return context;
};
