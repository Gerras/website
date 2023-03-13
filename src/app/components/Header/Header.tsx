import Image from '../../../design-library/components/Image/Image';
import Link from '../../../design-library/components/Link/Link';
import NavBar from '../../../design-library/components/NavBar/NavBar';
import NavContainer from '../../../design-library/components/NavBar/NavContainer';
import ProfileImg from '../../assets/profile-512-512.jpg';
import React from 'react';
import ThemeMenu from '../ThemeMenu/ThemeMenu';
import styled from 'styled-components';
import { useThemeContext } from '../../hooks/use-theme-context';

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

export const Header: React.FC = () => {
  const { changeTheme, theme } = useThemeContext();
  return (
    <NavBar sticky backgroundBlur>
      <NavContainer
        directStyles={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <ButtonContainer>
          <Image
            src={ProfileImg}
            containerStyles={{
              width: '4rem',
              marginRight: '8px'
            }}
            directStyles={{
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '50%'
            }}
          />
          <Link
            href="/"
            directStyles={{
              color: theme.palette.secondary.main,
              textDecoration: 'none'
            }}
          >
            Kevin Brauen
          </Link>
        </ButtonContainer>
        <ThemeMenu setTheme={changeTheme} />
      </NavContainer>
    </NavBar>
  );
};
