import Container from '../../design-library/components/Container/Container';
import React from 'react';
import Typography from '../../design-library/components/Typography/Typography';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        Hi!
      </Typography>
      <Typography variant="p">
        I'm Kevin Brauen and this is my personal website. I am a software
        engineer that loves React!
      </Typography>
    </Container>
  );
};

export default Home;
