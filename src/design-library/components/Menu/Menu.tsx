// This will be the menu component
// First step will be to get a component that uses an anchor element and is shown/hidden depending on some internal state.
// I think this would be a good candidate for a portal
// We will also probably need an overlay for it so it can capture the click.

import React, { useLayoutEffect, useState } from "react";
import Overlay from "../Overlay/Overlay";
import { MenuContext } from "./MenuContext.hook";
import MenuList from "./MenuList";
import MenuRoot from "./MenuRoot";

interface MenuProps {
  anchor: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const OVERLAY_ID = "overlay";

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
    return () => {
      setElementMeta(null);
    };
  }, [props.anchor, props.open]);

  const handleCloseAndCleanup = () => {
    props.onClose();
  };

  if (!props.open || !elementMeta) {
    return null;
  }

  const contextValue: MenuContext = {
    handleClose: handleCloseAndCleanup,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      <Overlay id={OVERLAY_ID}>
        <MenuRoot top={elementMeta.bottom} left={elementMeta.left}>
          <MenuList>{props.children}</MenuList>
        </MenuRoot>
      </Overlay>
    </MenuContext.Provider>
  );
};

export default Menu;
