import React from 'react';
import styled from 'styled-components';

interface MarkdownProps {
  id: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const MarkdownRoot = styled.textarea`
  font-size: 1rem;
  padding: 8px;
  border-radius: ${(props) => props.theme.borderRadius};
  resize: vertical;
`;

const MarkdownInput: React.FC<MarkdownProps> = (props) => {
  return <MarkdownRoot id={props.id} onChange={props.onChange} />;
};

export default MarkdownInput;
