import React, { useState } from 'react';
import Divider from '../Divider/Divider';
import Label from '../Form/Label';
import Markdown from './Markdown';
import MarkdownInput from './MarkdownInput';
import Typography from '../Typography/Typography';
import styled from 'styled-components';

interface MarkdownPreviewProps {
  inputId: string;
  label: string;
}

const MarkdownPreviewContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const MarkdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 10px);
`;

const MarkdownPreview: React.FC<MarkdownPreviewProps> = (props) => {
  const [markDown, setMarkDown] = useState<string>('');
  const handleOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMarkDown(e.currentTarget.value);
  };

  return (
    <MarkdownPreviewContainer>
      <MarkdownContainer>
        <Label id={props.inputId} gutterBottom>
          {props.label}
        </Label>
        <MarkdownInput onChange={handleOnChange} id={props.inputId} />
      </MarkdownContainer>
      <Divider />
      <MarkdownContainer>
        <Typography gutterBottom>Preview</Typography>
        <Markdown markdown={markDown} />
      </MarkdownContainer>
    </MarkdownPreviewContainer>
  );
};

export default MarkdownPreview;
