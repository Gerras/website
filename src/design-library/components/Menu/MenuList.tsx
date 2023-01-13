import React from "react";
import styled from "styled-components";

interface MenuListProps {
  children?: React.ReactNode;
  width?: number;
}

interface MenuListRootProps {
  width: number;
}

const MenuListRoot = styled.ul<MenuListRootProps>`
  list-style-type: none;
  min-width: ${(props) => `${props.width}px`};
`;

const MenuList: React.FC<MenuListProps> = (props) => {
  return (
    <MenuListRoot width={props.width ?? 100}>{props.children}</MenuListRoot>
  );
};

export default MenuList;
