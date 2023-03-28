import Code from '../../../design-library/components/Code/Code';
import MarkdownPreview from '../../../design-library/components/Markdown/MarkdownPreview';
import React from 'react';
import Typography from '../../../design-library/components/Typography/Typography';

const MarkdownExample: React.FC = () => {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Markdown!
      </Typography>
      <Code>
        {`
    const ButtonExample: React.FC = () => { 
      return (
        <>
          <Typography variant="h1" gutterBottom>
            Buttons
          </Typography>
        </>
      );
    }
      `}
      </Code>
      <MarkdownPreview inputId="markdown" label="Markdown" />
    </>
  );
};

export default MarkdownExample;
