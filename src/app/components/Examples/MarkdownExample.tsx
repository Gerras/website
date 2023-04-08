import MarkdownPreview from '../../../design-library/components/Markdown/MarkdownPreview';
import React from 'react';
import Typography from '../../../design-library/components/Typography/Typography';

const MarkdownExample: React.FC = () => {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Markdown!
      </Typography>
      <MarkdownPreview inputId="markdown" label="Markdown" />
    </>
  );
};

export default MarkdownExample;
