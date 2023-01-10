import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useElementIntersection, {
  ObservedElement,
} from "../../hooks/use-on-screen.hook";
import { useViewportWidth } from "../../hooks/use-viewport-width.hook";
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
    width: number;
  } | null>(null);

  const [element, setElement] = useState<HTMLUListElement | null>(null);
  const menuListRefCallback = useCallback(
    (instance: HTMLUListElement | null) => {
      if (instance !== null) {
        setElement(instance);
      }
    },
    []
  );

  const onScreen = useElementIntersection(element);
  const windowWidth = useViewportWidth();
  // const getAdjustedBoundingRect = useCallback(
  //   (anchorElement: HTMLElement, observedElement: ObservedElement) => {
  //     const { elementBounds, intersectionType, rootBounds } = observedElement;
  //     const { top, bottom, right, left, width } =
  //       anchorElement.getBoundingClientRect();
  //     if (elementBounds === null || rootBounds === null) {
  //       return {
  //         top,
  //         right,
  //         bottom,
  //         left,
  //         width,
  //       };
  //     }
  //   },
  //   [props.anchor]
  // );
  const adjustLeft = useMemo(() => {
    const { elementBounds, intersectionType, rootBounds } = onScreen;
    if (
      intersectionType === "visible" ||
      elementBounds === null ||
      rootBounds === null
    ) {
      return null;
    }
    // This means that the right side of the element is out of screen
    if (elementBounds.right > rootBounds.right) {
      const rightDiff = elementBounds.right - rootBounds.right;
      const adjustedLeft = elementBounds.left - rightDiff;
      return {
        left: adjustedLeft > 0 ? adjustedLeft : 0,
      } as const;
    }
    return {
      left: elementBounds.left,
    };
  }, [onScreen]);

  useEffect(() => {
    const { anchor } = props;
    if (anchor) {
      const { bottom, left, width } = anchor.getBoundingClientRect();
      setElementMeta({ bottom, left, width });
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

  console.log("elementMeta", elementMeta);
  // console.log("adjusted", adjustLayout);

  const contextValue: MenuContext = {
    handleClose,
  };

  console.log("ELEMENT!!!!!!!!!!!!!!! onscreen", onScreen);

  return (
    <MenuContext.Provider value={contextValue}>
      <Overlay id={OVERLAY_ID}>
        <MenuRoot
          top={elementMeta.bottom}
          left={adjustLeft !== null ? adjustLeft.left : elementMeta.left}
        >
          <MenuList width={elementMeta.width} ref={menuListRefCallback}>
            {props.children}
          </MenuList>
        </MenuRoot>
      </Overlay>
    </MenuContext.Provider>
  );
};

export default Menu;
