import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { getViewPortHeight, getViewPortWidth } from '../../utils/dom.utils';
import styled from 'styled-components';

interface MenuRootProps {
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
  const ref = useRef<HTMLDivElement | null>(null);
  const [domRect, setDomRect] = useState<DOMRect | undefined>();

  useLayoutEffect(() => {
    const domObject = ref.current?.getBoundingClientRect();
    setDomRect(domObject);
  }, []);

  // Check and see if we are actually overflowing content. If we are add padding, if we aren't do not.
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  const { parentDomRect, left, children } = props;
  const { menuX, menuY } = useMemo(() => {
    const viewPortWidth = getViewPortWidth();
    const viewPortHeight = getViewPortHeight();
    let menuX = left;
    let menuY = parentDomRect.bottom;
    if (domRect) {
      if (menuY + domRect.height > viewPortHeight) {
        menuY = parentDomRect.top;
      }
      if (domRect.right > viewPortWidth) {
        const rightDiff = domRect.right - viewPortWidth;
        const adjustedLeft = domRect.left - rightDiff - 25;
        menuX = adjustedLeft;
      }
    }
    return { menuX, menuY };
  }, [parentDomRect, left, domRect]);

  return (
    <MenuRootStyledComponent ref={ref} y={menuY} x={menuX}>
      {children}
    </MenuRootStyledComponent>
  );
};

export default MenuRoot;
