import React, { StrictMode, useState } from 'react';
import ButtonExample from './components/Examples/ButtonExample';
import Container from '../design-library/components/Container/Container';
import GlobalStyle from '../design-library/styles/GlobalStyle';
import { Header } from './components/Header/Header';
import MenuExample from './components/Examples/MenuExample';
import { ThemeProvider } from 'styled-components';
import TransitionExample from './components/Examples/TransitionExample';
import { TypographyExample } from './components/Examples/TypographyExample';
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
        <Container maxWidth="md" directStyles={{ height: '100%' }}>
          <MenuExample />
        </Container>
        <Container maxWidth="md">
          <TransitionExample />
        </Container>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
