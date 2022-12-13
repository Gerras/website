import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  name: "default",
  borderRadius: "4px",
  palette: {
    common: {
      black: "#000",
      white: "#ffffff",
    },
    primary: {
      main: "#1976d2",
      contrastText: "#000",
    },
    secondary: {
      main: "#9c27b0",
      contrastText: "#000",
    },
    background: {
      default: "#fffff",
    },
  },
};

export const darkTheme: DefaultTheme = {
  name: "dark",
  borderRadius: "4px",
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#90caf9",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ce93d8",
      contrastText: "#ffffff",
    },
    background: {
      default: "#222831",
    },
  },
};
