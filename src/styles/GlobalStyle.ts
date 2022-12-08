import { createGlobalStyle } from "styled-components";

interface Theme {
  theme: {
    colors: {
      body: string;
    };
  };
}

export default createGlobalStyle<Theme>`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body {
    background-color: ${(props) => props.theme.colors.body};
}
#root{
    margin: 0 auto;
    font-size: 16px;
}`;
