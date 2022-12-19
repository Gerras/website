import React from "react";
import styled from "styled-components";

interface MenuListProps {
  children?: React.ReactNode;
}

const MenuListRoot = styled.ul`
  list-style-type: none;
`;

const MenuList: React.FC<MenuListProps> = (props) => {
  return <MenuListRoot>{props.children}</MenuListRoot>;
};

export default MenuList;
