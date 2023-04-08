import React from 'react';
import styled from 'styled-components';

interface MarkdownProps {
  id: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string | ReadonlyArray<string> | number | undefined;
}

const MarkdownInputRoot = styled.textarea`
  font-size: 1rem;
  padding: 8px;
  border-radius: ${(props) => props.theme.borderRadius};
  resize: vertical;
`;

const MarkdownInput: React.FC<MarkdownProps> = (props) => {
  return (
    <MarkdownInputRoot
      id={props.id}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default MarkdownInput;
