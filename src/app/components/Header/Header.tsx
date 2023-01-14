import React from 'react';
import { DefaultTheme } from 'styled-components';
import NavBar from '../../../design-library/components/NavBar/NavBar';
import NavContainer from '../../../design-library/components/NavBar/NavContainer';
import Typography from '../../../design-library/components/Typography/Typography';
import ThemeMenu from '../ThemeMenu/ThemeMenu';

interface HeaderProps {
  theme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <NavBar sticky backgroundBlur>
      <NavContainer
        directStyles={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <Typography directStyles={{ flex: 1 }}>Kevin Brauen</Typography>
        <ThemeMenu setTheme={props.setTheme} />
      </NavContainer>
    </NavBar>
  );
};
