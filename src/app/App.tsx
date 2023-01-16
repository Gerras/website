import React, { StrictMode, useState } from 'react';
import ButtonExample from './components/ButtonExample/ButtonExample';
import Container from '../design-library/components/Container/Container';
import GlobalStyle from '../design-library/styles/GlobalStyle';
import { Header } from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import TransitionExample from './components/TransitionExample/TransitionExample';
import { TypographyExample } from './components/TypographyExample/TypographyExample';
import { defaultTheme } from '../design-library/styles/Theme';

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme} />
        <Container maxWidth="md" directStyles={{ marginBottom: '1rem' }}>
          <TypographyExample />
        </Container>
        <Container maxWidth="md" directStyles={{ height: '100%' }}>
          <ButtonExample />
        </Container>
        <Container maxWidth="md">
          <TransitionExample />
        </Container>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
