import { DefaultTheme } from 'styled-components';
import NavBar from '../../../design-library/components/NavBar/NavBar';
import NavContainer from '../../../design-library/components/NavBar/NavContainer';
import React from 'react';
import ThemeMenu from '../ThemeMenu/ThemeMenu';
import Typography from '../../../design-library/components/Typography/Typography';

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
