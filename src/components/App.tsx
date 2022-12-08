import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import TypoGraphy from "./Typography/Typography";

interface Theme {
  name: string;
  colors: {
    main: string;
    body: string;
  };
}

const lightTheme: Theme = {
  name: "light",
  colors: {
    main: "black",
    body: "#E1E2E1",
  },
};

const darkTheme: Theme = {
  name: "dark",
  colors: {
    main: "white",
    body: "black",
  },
};

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const handleOnClick = () => {
    console.log("HERE");
    if (theme.name === "light") {
      console.log("HERE DARK");
      setTheme(darkTheme);
    } else {
      console.log("HERE LIGHT");
      setTheme(lightTheme);
    }
  };
  console.log("theme", theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <button onClick={handleOnClick}>Click me to switch theme</button>
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
