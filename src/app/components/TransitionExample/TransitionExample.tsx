import React, { useState } from 'react';
import Button from '../../../design-library/components/Button/Button';
import FadeTransition from '../../../design-library/components/Transitions/FadeTransition';
import Typography from '../../../design-library/components/Typography/Typography';

const TransitionExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOnFadeInButtonClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Transitions
      </Typography>
      <Button onClick={handleOnFadeInButtonClick}>Fade Transition</Button>
      <FadeTransition duration={300} in={open}>
        <Typography>This is an example of a fade in transition.</Typography>
      </FadeTransition>
    </>
  );
};

export default TransitionExample;
