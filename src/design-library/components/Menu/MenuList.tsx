import React, { forwardRef } from "react";
import styled from "styled-components";

interface MenuListProps {
  children?: React.ReactNode;
}

const MenuListRoot = styled.ul`
  list-style-type: none;
`;

const MenuList = forwardRef<HTMLUListElement, MenuListProps>((props, ref) => {
  return <MenuListRoot ref={ref}>{props.children}</MenuListRoot>;
});

export default MenuList;
