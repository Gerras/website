import React, { useLayoutEffect, useRef, useState } from 'react';
import { getViewPortHeight, getViewPortWidth } from '../../utils/dom.utils';
import styled from 'styled-components';

interface MenuRootProps {
  // left: number;
  // top: number;
  x: number;
  y: number;
}

interface MenuRootComponentProps {
  children: React.ReactNode;
  left: number;
  top: number;
  parentDomRect: DOMRect;
}

const MenuRootStyledComponent = styled.div<MenuRootProps>`
  top: 0px;
  left: 0px;
  position: absolute;
  opacity: 1;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  background-color: ${(props) => props.theme.palette.background.main};
  transform: ${(props) => `translate3d(${props.x}px, ${props.y}px, 0)`};
`;

const MenuRoot: React.FC<MenuRootComponentProps> = (props) => {
  // const [element, setElement] = useState<HTMLDivElement | null>(null);
  // const menuListRefCallback = useCallback((instance: HTMLDivElement | null) => {
  //   if (instance !== null) {
  //     setElement(instance);
  //   }
  // }, []);

  const ref = useRef<HTMLDivElement | null>(null);
  // const [calculatedOffset, setCalculatedOffset] = useState<number | undefined>(
  //   props.left
  // );

  const [domRect, setDomRect] = useState<DOMRect | undefined>();

  // const onScreen = useElementIntersection(element);

  // useEffect(() => {
  //   const { elementBounds, intersectionType, rootBounds } = onScreen;
  //   if (intersectionType === 'visible') {
  //     setCalculatedOffset(props.left);
  //   } else if (elementBounds !== null && rootBounds !== null) {
  //     // This means that the right side of the element is out of screen
  //     if (elementBounds.right > rootBounds.right) {
  //       const rightDiff = elementBounds.right - rootBounds.right;
  //       const adjustedLeft = elementBounds.left - rightDiff;
  //       setCalculatedOffset(adjustedLeft - 10);
  //     } else {
  //       setCalculatedOffset(props.left);
  //     }
  //   }
  // }, []);

  useLayoutEffect(() => {
    const domObject = ref.current?.getBoundingClientRect();
    setDomRect(domObject);
  }, []);

  const viewPortWidth = getViewPortWidth();
  const viewPortHeight = getViewPortHeight();
  let menuX = props.left;
  let menuY = props.parentDomRect.bottom;
  console.log('menuY 1', menuY);
  if (domRect) {
    console.log('domRect.height', domRect.height);
    console.log('viewPortHeight', viewPortHeight);
    console.log('menuY 2', menuY);
    if (menuY + domRect.height > viewPortHeight) {
      menuY = props.parentDomRect.top;
      console.log('menuY 3', menuY);
    }
    if (domRect.right > viewPortWidth) {
      const rightDiff = domRect.right - viewPortWidth;
      const adjustedLeft = domRect.left - rightDiff - 25;
      menuX = adjustedLeft;
    }
  }

  return (
    <MenuRootStyledComponent ref={ref} y={menuY} x={menuX}>
      {props.children}
    </MenuRootStyledComponent>
  );
};

export default MenuRoot;
