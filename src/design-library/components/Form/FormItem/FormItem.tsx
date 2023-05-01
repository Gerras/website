import React from 'react';
import styled from 'styled-components';
import { useFormContext } from '../Form.context';
interface FormItemProps {
  children?: React.ReactNode;
  inline?: boolean;
  gutterBottom?: boolean;
}

interface FormItemRootProps {
  inline: boolean;
  gutterBottom: boolean;
}

const FormItemRoot = styled.div<FormItemRootProps>`
  display: flex;
  flex-direction: ${(props) => (props.inline ? 'row' : 'column')};
  margin-bottom: ${(props) => (props.gutterBottom ? '0.75rem' : '0')};
`;

const FormItem: React.FC<FormItemProps> = (props) => {
  const context = useFormContext();
  const inline = !!props.inline;
  const gutterBottom = props.gutterBottom ?? true;
  return (
    <FormItemRoot
      gutterBottom={gutterBottom}
      inline={context ? context.inline : inline}
    >
      {props.children}
    </FormItemRoot>
  );
};

export default FormItem;
