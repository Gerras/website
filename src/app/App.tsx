import React, { StrictMode, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme, defaultTheme } from "../styles/Theme";
import NavBar from "../design-library/NavBar/NavBar";
import NavContainer from "../design-library/NavBar/NavContainer";
import Typography from "../design-library/Typography/Typography";
import { Header } from "./components/Header/Header";
import { TypographyExample } from "./components/TypographyExample/TypographyExample";
import Container from "../design-library/Container/Container";

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header theme={theme} onButtonClick={setTheme} />
        <Container maxWidth="md">
          <TypographyExample />
        </Container>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
