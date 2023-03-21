import React from 'react';
import styled from 'styled-components';

interface MarkdownProps {
  id: string;
  label: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const MarkdownContainer = styled.div``;
const MarkdownRoot = styled.textarea``;

const MarkdownInput: React.FC<MarkdownProps> = (props) => {
  return (
    <MarkdownContainer>
      <MarkdownRoot id={props.id} onChange={props.onChange} />
    </MarkdownContainer>
  );
};

export default MarkdownInput;
