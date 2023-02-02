import React, { useEffect, useState } from 'react';
import { MenuContext } from './MenuContext.hook';
import MenuList from './MenuList';
import MenuRoot from './MenuRoot';
import Overlay from '../Overlay/Overlay';
import { useViewportWidth } from '../../hooks/use-viewport-width.hook';

interface MenuProps {
  anchor: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const OVERLAY_ID = 'overlay';

const Menu: React.FC<MenuProps> = (props) => {
  const [elementMeta, setElementMeta] = useState<DOMRect | null>(null);

  const windowWidth = useViewportWidth();

  useEffect(() => {
    const { anchor } = props;
    if (anchor) {
      const domRect = anchor.getBoundingClientRect();
      setElementMeta(domRect);
    }
    return () => {
      setElementMeta(null);
    };
  }, [props.anchor, props.open, windowWidth]);

  const handleClose = () => {
    props.onClose();
  };

  if (!props.open || !elementMeta) {
    return null;
  }

  const contextValue: MenuContext = {
    handleClose
  };

  return (
    <MenuContext.Provider value={contextValue}>
      <Overlay id={OVERLAY_ID}>
        <MenuRoot
          top={elementMeta.bottom}
          left={elementMeta.left}
          parentDomRect={elementMeta}
        >
          <MenuList width={elementMeta.width}>{props.children}</MenuList>
        </MenuRoot>
      </Overlay>
    </MenuContext.Provider>
  );
};

export default Menu;
