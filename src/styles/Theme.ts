import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  name: "default",
  borderRadius: "4px",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#fffff",
      contrastText: "#000",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
};

export const darkTheme: DefaultTheme = {
  name: "dark",
  borderRadius: "4px",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#222831",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1b171f",
      contrastText: "#ffffff",
    },
  },
};
