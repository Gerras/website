import React, { useState } from 'react';
import Markdown from './Markdown';
import MarkdownInput from './MarkdownInput';

const MarkdownPreview: React.FC = () => {
  const [markDown, setMarkDown] = useState<string>('');
  const handleOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMarkDown(e.currentTarget.value);
  };

  return (
    <>
      <MarkdownInput
        onChange={handleOnChange}
        id="markdown123"
        label="markdown123"
      />
      <Markdown markdown={markDown} />
    </>
  );
};

export default MarkdownPreview;
