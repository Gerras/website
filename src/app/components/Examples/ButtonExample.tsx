import Button from '../../../design-library/components/Button/Button';
import React from 'react';
import Typography from '../../../design-library/components/Typography/Typography';

const ButtonExample: React.FC = () => {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Buttons
      </Typography>
      <div>
        <Button variant="primary" size="sm">
          Small
        </Button>
        <Button variant="primary" size="md">
          Medium
        </Button>
        <Button variant="primary" size="lg">
          Large
        </Button>
      </div>
      <div>
        <Button variant="secondary" size="sm">
          Small
        </Button>
        <Button variant="secondary" size="md">
          Medium
        </Button>
        <Button variant="secondary" size="lg">
          Large
        </Button>
      </div>
      <div>
        <Button variant="tertiary" size="sm">
          small
        </Button>
        <Button variant="tertiary" size="md">
          Medium
        </Button>
        <Button variant="tertiary" size="lg">
          Large
        </Button>
      </div>
      <div>
        <Button href="/" size="sm">
          Link
        </Button>
      </div>
      {/* Add link example to go along with link button */}
    </>
  );
};

export default ButtonExample;
