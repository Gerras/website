// This will be the menu component
// First step will be to get a component that uses an anchor element and is shown/hidden depending on some internal state.
// I think this would be a good candidate for a portal
// We will also probably need an overlay for it so it can capture the click.

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import Overlay from "../Overlay/Overlay";
import MenuList from "./MenuList";

interface MenuProps {
  anchor: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

interface MenuRootProps {
  top: number;
  left: number;
}

const MenuRoot = styled.div<MenuRootProps>`
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  position: absolute;
`;

const Menu: React.FC<MenuProps> = (props) => {
  const [elementMeta, setElementMeta] = useState<{
    bottom: number;
    left: number;
  } | null>(null);

  useLayoutEffect(() => {
    const { anchor } = props;
    if (anchor) {
      const { bottom, left } = anchor.getBoundingClientRect();
      setElementMeta({ bottom, left });
    }
  }, [props.anchor, props.open]);

  // Context
  const handleCloseAndCleanup = () => {
    const element = document.getElementById("overlay");
    element?.remove();
    props.onClose();
  };

  if (!props.open || !elementMeta) {
    console.log("NULLLLLLLLL");
    return null;
  }

  return (
    <Overlay id="overlay">
      (
      <MenuRoot top={elementMeta.bottom} left={elementMeta.left}>
        <MenuList>{props.children}</MenuList>
      </MenuRoot>
      )
    </Overlay>
  );
};

export default Menu;
