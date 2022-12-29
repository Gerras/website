// styled.d.ts
import "styled-components";
import { RGB } from "../utils/hex-to-rgb.utils";

interface IPalette {
  main: string;
  rgbMain: RGB;
  contrastText: string;
  rgbContrastText: RGB;
}

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
      background: IPalette;
    };
  }
}
