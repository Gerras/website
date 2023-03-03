import { createContext, useContext } from 'react';
import { DefaultTheme } from 'styled-components';

export interface ThemeContext {
  theme: DefaultTheme;
  changeTheme: (theme: DefaultTheme) => void;
}

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'No context found for the themecontext. Please define one.'
    );
  }

  return context;
};
