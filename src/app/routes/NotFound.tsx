import Container from '../../design-library/components/Container/Container';
import { Header } from '../components/Header/Header';
import React from 'react';
import Typography from '../../design-library/components/Typography/Typography';

const NotFound: React.FC = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Typography variant="p">
          Hey, I don't know what that is so I'm gonna go ahead and <b>404</b>
          &nbsp;now.
        </Typography>
      </Container>
    </div>
  );
};

export default NotFound;
