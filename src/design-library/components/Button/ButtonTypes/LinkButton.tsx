import ButtonRoot from './ButtonRoot';
import { ButtonSize } from '../Button.types';
import React from 'react';
import { paddingMap } from '../Button.utils';
import styled from 'styled-components';

interface LinkButtonProps {
  children: React.ReactNode;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  href: string;
  size: ButtonSize;
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

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <LinkButtonRoot
      as="a"
      id={props.id}
      size={props.size}
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </LinkButtonRoot>
  );
};

export default LinkButton;
