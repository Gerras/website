import React from "react";
import styled from "styled-components";

interface MenuItemProps {
  children?: React.ReactNode;
}

const MenuItemRoot = styled.li`
  cursor: pointer;
`;

// Needs to use context here.
const handleOnClick = () => {
  const element = document.getElementById("overlay");
  element?.remove();
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return <MenuItemRoot onClick={handleOnClick}>{props.children}</MenuItemRoot>;
};

export default MenuItem;
