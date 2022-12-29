import React from "react";
import styled from "styled-components";
import useMenuContext from "./MenuContext.hook";

interface MenuItemProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

const MenuItemRoot = styled.li`
  color: ${(props) => props.theme.palette.background.contrastText};
  cursor: pointer;
  padding: 8px;
  white-space: nowrap;

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
            rgbContrastText: { r, g, b },
          },
        },
      },
    }) => `rgba(${r}, ${g}, ${b}, 0.1)`};
  }
`;

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { handleClose } = useMenuContext();

  const handleOnClick = props.onClick ?? handleClose;

  return <MenuItemRoot onClick={handleOnClick}>{props.children}</MenuItemRoot>;
};

export default MenuItem;
