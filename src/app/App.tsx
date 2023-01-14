import React, { StrictMode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../design-library/styles/GlobalStyle';
import { defaultTheme } from '../design-library/styles/Theme';
import { Header } from './components/Header/Header';
import { TypographyExample } from './components/TypographyExample/TypographyExample';
import Container from '../design-library/components/Container/Container';
import ButtonExample from './components/ButtonExample/ButtonExample';

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme} />
        <Container maxWidth="md">
          <TypographyExample />
        </Container>
        <Container maxWidth="md">
          <ButtonExample />
        </Container>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
