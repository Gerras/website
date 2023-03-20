import Code from '../../../design-library/components/Code/Code';
import MarkdownContainer from '../../../design-library/components/Markdown/MarkDown';
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
      <MarkdownContainer />
    </>
  );
};

export default MarkdownExample;
