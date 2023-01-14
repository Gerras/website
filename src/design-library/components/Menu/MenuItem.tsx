import styled, { CSSObject } from 'styled-components';
import React from 'react';
import RootStyled from '../Root/Root';
import useMenuContext from './MenuContext.hook';

interface MenuItemProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  directStyles?: CSSObject;
  selected?: boolean;
}

interface MenuItemRootProps {
  directStyles?: CSSObject;
  selected: boolean;
}

const MenuItemRoot = styled.li<MenuItemRootProps>`
  color: ${(props) => props.theme.palette.background.contrastText};
  cursor: pointer;
  padding: 8px;
  white-space: nowrap;
  background-color: ${(props) =>
    props.selected
      ? `rgba(${props.theme.palette.background.rgbContrastText.r}, ${props.theme.palette.background.rgbContrastText.g}, ${props.theme.palette.background.rgbContrastText.b}, 0.1)`
      : ''};

  :first-child {
    border-radius: 4px 4px 0 0;
  }

  :last-child {
    border-radius: 0 0 4px 4px;
  }

  :hover {
    background-color: ${({
      theme: {
        palette: {
          background: {
            rgbContrastText: { r, g, b }
          }
        }
      }
    }) => `rgba(${r}, ${g}, ${b}, 0.12)`};
  }
`;

const StyledMenuItemRoot = RootStyled(MenuItemRoot);

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { handleClose } = useMenuContext();

  const handleOnClick = props.onClick ?? handleClose;

  return (
    <StyledMenuItemRoot
      selected={!!props.selected}
      onClick={handleOnClick}
      directStyles={props.directStyles}
    >
      {props.children}
    </StyledMenuItemRoot>
  );
};

export default MenuItem;
