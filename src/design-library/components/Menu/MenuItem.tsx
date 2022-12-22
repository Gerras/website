import React from "react";
import styled from "styled-components";
import useMenuContext from "./MenuContext.hook";

interface MenuItemProps {
  children?: React.ReactNode;
}

const MenuItemRoot = styled.li`
  cursor: pointer;
  padding: 8px;
`;

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { handleClose } = useMenuContext();
  return <MenuItemRoot onClick={handleClose}>{props.children}</MenuItemRoot>;
};

export default MenuItem;
