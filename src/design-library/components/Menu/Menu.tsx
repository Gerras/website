import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/use-on-screen.hook";
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

  const menuListRef = useRef<HTMLUListElement | null>(null);

  const isIntersecting = useOnScreen(menuListRef);

  useEffect(() => {
    const { anchor } = props;
    if (anchor) {
      const { bottom, left } = anchor.getBoundingClientRect();
      setElementMeta({ bottom, left });
    }
    return () => {
      setElementMeta(null);
    };
  }, [props.anchor, props.open]);

  const handleClose = () => {
    props.onClose();
  };

  if (!props.open || !elementMeta) {
    return null;
  }

  const contextValue: MenuContext = {
    handleClose,
  };

  console.log("ref", menuListRef);
  console.log("MENULIST!!!", isIntersecting);

  return (
    <MenuContext.Provider value={contextValue}>
      <Overlay id={OVERLAY_ID}>
        <MenuRoot top={elementMeta.bottom} left={elementMeta.left}>
          <MenuList ref={menuListRef}>{props.children}</MenuList>
        </MenuRoot>
      </Overlay>
    </MenuContext.Provider>
  );
};

export default Menu;
