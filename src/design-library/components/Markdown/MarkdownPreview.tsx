import React, { useState } from 'react';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import ErrorBoundary from '../../utils/ErrorBoundary';
import Label from '../Label/Label';
import Markdown from './Markdown';
import MarkdownInput from './MarkdownInput';
import Typography from '../Typography/Typography';
import { Value } from '../../types/element.types';
import styled from 'styled-components';

interface MarkdownPreviewProps {
  inputId: string;
  label: string;
  onChange?: (value: string) => void;
  value?: Value;
}

type MarkdownVisibility = 'markdown' | 'preview' | 'both';

const MarkdownPreviewOuter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MarkdownPreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const MarkdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 10px);
`;

const MarkdownPreview: React.FC<MarkdownPreviewProps> = (props) => {
  const [markDown, setMarkDown] = useState<string>('');
  const [textAreaValue, setTextAreaValue] = useState<Value>(props.value);
  const [markdownVisibility, setMarkdownVisibility] =
    useState<MarkdownVisibility>('both');
  const handleOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const value = e.currentTarget.value;
    setTextAreaValue(value);
    setMarkDown(value);
    props.onChange?.(value);
  };

  const renderMarkdownVisibility = () => {
    if (markdownVisibility === 'preview') {
      return (
        <>
          <Typography variant="p" gutterBottom>
            Preview
          </Typography>
          <ErrorBoundary fallback={<div>Whoops!</div>}>
            <Markdown markdown={markDown} />
          </ErrorBoundary>
        </>
      );
    }
    if (markdownVisibility === 'markdown') {
      return (
        <>
          <Label htmlFor={props.inputId} gutterBottom>
            {props.label}
          </Label>
          <MarkdownInput
            onChange={handleOnChange}
            id={props.inputId}
            value={textAreaValue}
          />
        </>
      );
    }

    return (
      <MarkdownPreviewContainer>
        <MarkdownContainer>
          <Label htmlFor={props.inputId} gutterBottom>
            {props.label}
          </Label>
          <MarkdownInput
            onChange={handleOnChange}
            id={props.inputId}
            value={textAreaValue}
          />
        </MarkdownContainer>
        <Divider />
        <MarkdownContainer>
          <Typography gutterBottom>Preview</Typography>
          <ErrorBoundary fallback={<div>Whoops!</div>}>
            <Markdown markdown={markDown} />
          </ErrorBoundary>
        </MarkdownContainer>
      </MarkdownPreviewContainer>
    );
  };

  return (
    <MarkdownPreviewOuter>
      <ButtonContainer>
        <Button
          variant="tertiary"
          size="sm"
          type="button"
          directStyles={{ padding: 0, margin: '0 8px 0 0' }}
          onClick={() => setMarkdownVisibility('markdown')}
        >
          Markdown
        </Button>
        <Divider />
        <Button
          variant="tertiary"
          size="sm"
          type="button"
          directStyles={{ padding: 0, margin: 0 }}
          onClick={() => setMarkdownVisibility('preview')}
        >
          Preview
        </Button>
        <Divider />
        <Button
          variant="tertiary"
          size="sm"
          type="button"
          directStyles={{ padding: 0, margin: 0 }}
          onClick={() => setMarkdownVisibility('both')}
        >
          Both
        </Button>
      </ButtonContainer>
      {renderMarkdownVisibility()}
    </MarkdownPreviewOuter>
  );
};

export default MarkdownPreview;
