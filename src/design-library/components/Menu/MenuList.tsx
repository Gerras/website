import React, { forwardRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useElementIntersection from "../../hooks/use-on-screen.hook";

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

const MenuList = forwardRef<HTMLUListElement, MenuListProps>((props, ref) => {
  return (
    <MenuListRoot ref={ref} width={props.width ?? 100}>
      {props.children}
    </MenuListRoot>
  );
});

export default MenuList;
