import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme, defaultTheme } from "../styles/Theme";
import NavBar from "./NavBar/NavBar";
import NavContainer from "./NavBar/NavContainer";
import TypoGraphy from "./Typography/Typography";

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleOnClick = () => {
    if (theme.name === "default") {
      setTheme(darkTheme);
    } else {
      setTheme(defaultTheme);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar>
          <NavContainer>
            <TypoGraphy>This will be the nav</TypoGraphy>
            <button onClick={handleOnClick}>Click me to switch theme</button>
          </NavContainer>
        </NavBar>

        <TypoGraphy variant="p" gutterBottom>
          Hi this is kevins personal website
        </TypoGraphy>
        <TypoGraphy variant="h1" gutterBottom>
          h1. Header type 1
        </TypoGraphy>
        <TypoGraphy variant="h2" gutterBottom>
          h2. Header type 2
        </TypoGraphy>
        <TypoGraphy variant="h3" gutterBottom>
          h3. Header type 3
        </TypoGraphy>
        <TypoGraphy variant="h4" gutterBottom>
          h4. Header type 4
        </TypoGraphy>
        <TypoGraphy variant="h5" gutterBottom>
          h5. Header type 5
        </TypoGraphy>
        <TypoGraphy variant="h6" gutterBottom>
          h6. Header type 6
        </TypoGraphy>
        <TypoGraphy variant="p" gutterBottom>
          This is a paragraph!!!!
        </TypoGraphy>
      </ThemeProvider>
    </>
  );
};

export default App;
