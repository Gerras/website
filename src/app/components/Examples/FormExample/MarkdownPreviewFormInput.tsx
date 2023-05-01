import MarkdownPreview from '../../../../design-library/components/Markdown/MarkdownPreview';
import React from 'react';
import { useFormContext } from '../../../../design-library/components/Form/Form.context';

interface FormRadioInputProps<T> {
  name: keyof T;
  inputId: string;
  label: string;
}

const MarkDownPreviewFormInput = <T extends object>(
  props: FormRadioInputProps<T>
) => {
  const { name } = props;
  const context = useFormContext<T>();

  const handleOnChange = (newValue: string) => {
    context.onValueChange(name, newValue);
  };

  const value = context.form[name];

  return (
    <MarkdownPreview
      onChange={handleOnChange}
      value={value as string}
      inputId={props.inputId}
      label={props.label}
    />
  );
};

export default MarkDownPreviewFormInput;
