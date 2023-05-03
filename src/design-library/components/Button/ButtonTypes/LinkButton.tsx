import styled, { CSSObject } from 'styled-components';
import ButtonRoot from './ButtonRoot';
import { ButtonSize } from '../Button.types';
import React from 'react';
import RootStyled from '../../RootStyled/RootStyled';
import { paddingMap } from '../Button.utils';

interface LinkButtonProps {
  children: React.ReactNode;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  href: string;
  size: ButtonSize;
  directStyles?: CSSObject;
}

const LinkButtonRoot = styled(ButtonRoot)`
  background-color: ${(props) => props.theme.palette.background.main};
  color: ${(props) => props.theme.palette.primary.main};
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: ${(props) => {
    const [leftRight, topBottom] = paddingMap[props.size];
    return `${leftRight}px ${topBottom}px;`;
  }};

  :hover {
    background-color: ${({
      theme: {
        palette: {
          primary: {
            rgbMain: { r, g, b }
          }
        }
      }
    }) => `rgba(${r}, ${g}, ${b}, 0.1)`};
  }
`;

const StyledLinkButtonRoot = RootStyled(LinkButtonRoot);

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <StyledLinkButtonRoot
      as="a"
      id={props.id}
      size={props.size}
      href={props.href}
      onClick={props.onClick}
      directStyles={props.directStyles}
    >
      {props.children}
    </StyledLinkButtonRoot>
  );
};

export default LinkButton;
