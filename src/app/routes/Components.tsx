import ButtonExample from '../components/Examples/ButtonExample';
import Container from '../../design-library/components/Container/Container';
import MenuExample from '../components/Examples/MenuExample';
import React from 'react';
import TransitionExample from '../components/Examples/TransitionExample';
import TypographyExample from '../components/Examples/TypographyExample';

const Components: React.FC = () => {
  return (
    <>
      <Container maxWidth="md" directStyles={{ marginBottom: '1rem' }}>
        <TypographyExample />
      </Container>
      <Container maxWidth="md" directStyles={{ marginBottom: '1rem' }}>
        <ButtonExample />
      </Container>
      <Container maxWidth="md" directStyles={{ marginBottom: '1rem' }}>
        <MenuExample />
      </Container>
      <Container maxWidth="md" directStyles={{ marginBottom: '1rem' }}>
        <TransitionExample />
      </Container>
    </>
  );
};

export default Components;
