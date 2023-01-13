import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useElementIntersection from "../../hooks/use-on-screen.hook";

interface MenuRootProps {
  left: number;
  top: number;
}

interface MenuRootComponentProps {
  children: React.ReactNode;
  left: number;
  top: number;
}

const MenuRootStyledComponent = styled.div<MenuRootProps>`
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  position: absolute;
  opacity: 1;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  z-index: 1300;
  background-color: ${(props) => props.theme.palette.background.main};
`;

const MenuRoot: React.FC<MenuRootComponentProps> = (props) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const menuListRefCallback = useCallback((instance: HTMLDivElement | null) => {
    if (instance !== null) {
      setElement(instance);
    }
  }, []);
  const [calculatedOffset, setCalculatedOffset] = useState<number | undefined>(
    undefined
  );

  const onScreen = useElementIntersection(element);

  useEffect(() => {
    const { elementBounds, intersectionType, rootBounds } = onScreen;
    if (intersectionType === "visible") {
      setCalculatedOffset(props.left);
    } else if (elementBounds !== null && rootBounds !== null) {
      // This means that the right side of the element is out of screen
      if (elementBounds.right > rootBounds.right) {
        const rightDiff = elementBounds.right - rootBounds.right;
        const adjustedLeft = elementBounds.left - rightDiff;
        setCalculatedOffset(adjustedLeft - 10);
      } else {
        setCalculatedOffset(props.left);
      }
    }
  }, [onScreen.intersectionType]);

  return (
    <MenuRootStyledComponent
      ref={menuListRefCallback}
      top={props.top}
      left={calculatedOffset ?? props.left}
    >
      {props.children}
    </MenuRootStyledComponent>
  );
};

export default MenuRoot;
