import styled, { CSSObject } from 'styled-components';
import React from 'react';
import RootStyled from '../Root/Root';

type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ContainerBaseProps {
  containerWidth: string;
  directStyles?: CSSObject;
}

interface ContainerRootProps {
  maxWidth?: string;
}

interface ContainerProps {
  children: React.ReactNode;
  maxWidth: MaxWidth;
  directStyles?: CSSObject;
}

const maxWidthMap: Record<MaxWidth, string | null> = {
  xs: null,
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1500px'
};

const ContainerBase = styled.div<ContainerBaseProps>`
  box-sizing: border-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: ${(props) => props.containerWidth}) {
    max-width: ${(props) => props.containerWidth};
  }
`;

const StyledContainerBase = RootStyled(ContainerBase);

const ContainerRoot = styled.div<ContainerRootProps>`
  background-color: ${(props) => props.theme.palette.background.main};
`;

const Container: React.FC<ContainerProps> = (props) => {
  const containerWidth = maxWidthMap[props.maxWidth] ?? '0';
  return (
    <StyledContainerBase
      containerWidth={containerWidth}
      directStyles={props.directStyles}
    >
      <ContainerRoot>{props.children}</ContainerRoot>
    </StyledContainerBase>
  );
};

export default Container;
