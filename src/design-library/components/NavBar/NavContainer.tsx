import styled, { CSSObject } from 'styled-components';
import React from 'react';
import RootStyled from '../Root/Root';

interface NavContainerRootInterface {
  directStyles?: CSSObject;
}

interface NavContainerProps {
  directStyles?: CSSObject;
  children?: React.ReactNode;
}

const NavContainerRoot = styled.div<NavContainerRootInterface>`
  min-height: 64px;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
`;

const StyledNavContainerRoot = RootStyled(NavContainerRoot);

const NavContainer: React.FC<NavContainerProps> = (props) => {
  return (
    <StyledNavContainerRoot directStyles={props.directStyles}>
      {props.children}
    </StyledNavContainerRoot>
  );
};

export default NavContainer;
