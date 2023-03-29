import { DefaultTheme } from 'styled-components';
import { hexToRgb } from '../utils/hex-to-rgb.utils';

export const defaultTheme: DefaultTheme = {
  name: 'Default',
  borderRadius: '4px',
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    primary: {
      main: '#1976d2',
      rgbMain: hexToRgb('#1976d2'),
      contrastText: '#ffffff',
      rgbContrastText: hexToRgb('#000000')
    },
    secondary: {
      main: '#9c27b0',
      rgbMain: hexToRgb('#9c27b0'),
      contrastText: '#000000',
      rgbContrastText: hexToRgb('#000000')
    },
    background: {
      main: '#ffffff',
      rgbMain: hexToRgb('#ffffff'),
      contrastText: '#000000',
      rgbContrastText: hexToRgb('#000000')
    },
    grey: {
      g50: '#fafafa',
      g100: '#f5f5f5',
      g200: '#eeeeee',
      g300: '#e0e0e0',
      g400: '#bdbdbd',
      g500: '#9e9e9e',
      g600: '#757575',
      g700: '#616161',
      g800: '#424242',
      g900: '#212121'
    }
  }
};

export const darkTheme: DefaultTheme = {
  name: 'Dark',
  borderRadius: '4px',
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    primary: {
      main: '#90caf9',
      rgbMain: hexToRgb('#90caf9'),
      contrastText: '#000000',
      rgbContrastText: hexToRgb('#000000')
    },
    secondary: {
      main: '#ce93d8',
      rgbMain: hexToRgb('#ce93d8'),
      contrastText: '#ffffff',
      rgbContrastText: hexToRgb('#ffffff')
    },
    background: {
      main: '#222831',
      rgbMain: hexToRgb('#222831'),
      contrastText: '#ffffff',
      rgbContrastText: hexToRgb('#ffffff')
    },
    grey: {
      g50: '#fafafa',
      g100: '#f5f5f5',
      g200: '#eeeeee',
      g300: '#e0e0e0',
      g400: '#bdbdbd',
      g500: '#9e9e9e',
      g600: '#757575',
      g700: '#616161',
      g800: '#424242',
      g900: '#212121'
    }
  }
};

// This should eventually come from an API request so we can make more themes.
export const THEMES = [darkTheme, defaultTheme];
