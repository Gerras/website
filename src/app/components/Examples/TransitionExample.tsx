import React, { useState } from 'react';
import Button from '../../../design-library/components/Button/Button';
import FadeTransition from '../../../design-library/components/Transitions/FadeTransition';
import Image from '../../../design-library/components/Image/Image';
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
      <Image src="https://petapixel.com/assets/uploads/2022/08/fdfs19-800x533.jpg" />
    </>
  );
};

export default TransitionExample;
