import ButtonExample from '../components/Examples/ButtonExample';
import Container from '../../design-library/components/Container/Container';
import MarkdownExample from '../components/Examples/MarkdownExample';
import MenuExample from '../components/Examples/MenuExample';
import React from 'react';
import TransitionExample from '../components/Examples/TransitionExample';
import Typography from '../../design-library/components/Typography/Typography';
import TypographyExample from '../components/Examples/TypographyExample';

const Components: React.FC = () => {
  return (
    <>
      <Container maxWidth="md" gutterBottom>
        <Typography variant="h1" gutterBottom>
          Components
        </Typography>
        <Typography variant="p">
          For fun I built a component library. I used Material UI as
          inspiration, because I think they do it the best and you can learn a
          lot reverse-engineering things!
        </Typography>
      </Container>
      <Container maxWidth="md" gutterBottom>
        <TypographyExample />
      </Container>
      <Container maxWidth="md" gutterBottom>
        <ButtonExample />
      </Container>
      <Container maxWidth="md" gutterBottom>
        <MenuExample />
      </Container>
      <Container maxWidth="md" gutterBottom>
        <TransitionExample />
      </Container>
      <Container maxWidth="md" gutterBottom>
        <MarkdownExample />
      </Container>
    </>
  );
};

export default Components;
