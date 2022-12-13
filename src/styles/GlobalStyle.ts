import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body {
    background-color: ${(props) => props.theme.palette.background.default};
}
#root{
    margin: 0 auto;
    font-size: 16px;
}`;
