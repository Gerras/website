import Button from '../../../design-library/components/Button/Button';
import NavBar from '../../../design-library/components/NavBar/NavBar';
import NavContainer from '../../../design-library/components/NavBar/NavContainer';
import React from 'react';
import ThemeMenu from '../ThemeMenu/ThemeMenu';
import styled from 'styled-components';
import { useThemeContext } from '../../hooks/use-theme-context';

const ButtonContainer = styled.div`
  flex: 1;
`;

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
        <ButtonContainer>
          <Button href="/">Kevin Brauen</Button>
        </ButtonContainer>
        <ThemeMenu setTheme={changeTheme} />
      </NavContainer>
    </NavBar>
  );
};
