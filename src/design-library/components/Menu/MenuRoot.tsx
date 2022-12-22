import styled from "styled-components";

interface MenuRootProps {
  top: number;
  left: number;
}

const MenuRoot = styled.div<MenuRootProps>`
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  position: absolute;
  opacity: 1;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  z-index: 1300;
`;

export default MenuRoot;
