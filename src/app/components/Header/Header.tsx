import NavBar from '../../../design-library/components/NavBar/NavBar';
import NavContainer from '../../../design-library/components/NavBar/NavContainer';
import React from 'react';
import ThemeMenu from '../ThemeMenu/ThemeMenu';
import Typography from '../../../design-library/components/Typography/Typography';
import { useThemeContext } from '../../hooks/use-theme-context';

export const Header: React.FC = () => {
  const { changeTheme } = useThemeContext();
  return (
    <NavBar sticky backgroundBlur>
      <NavContainer
        directStyles={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        {/* TODO: Make this a link, create a component for that */}
        <Typography directStyles={{ flex: 1 }}>Kevin Brauen</Typography>
        <ThemeMenu setTheme={changeTheme} />
      </NavContainer>
    </NavBar>
  );
};
