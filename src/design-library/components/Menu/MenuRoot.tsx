import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { getViewPortHeight, getViewPortWidth } from '../../utils/dom.utils';
import { CSSObject } from 'styled-components';
import OverlayContent from '../Overlay/OverlayContent';

interface MenuRootComponentProps {
  children: React.ReactNode;
  left: number;
  top: number;
  parentDomRect: DOMRect;
}

const MenuRoot: React.FC<MenuRootComponentProps> = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [domRect, setDomRect] = useState<DOMRect | undefined>();

  useLayoutEffect(() => {
    const domObject = ref.current?.getBoundingClientRect();
    setDomRect(domObject);
  }, []);

  // TODO: Check and see if we are actually overflowing content. If we are add padding, if we aren't do not.
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

  const styles: CSSObject = {
    top: '0px',
    left: '0px',
    position: 'absolute',
    transform: `translate3d(${menuX}px, ${menuY}px, 0)`
  };

  return (
    <OverlayContent ref={ref} shadow={6} directStyles={styles}>
      {children}
    </OverlayContent>
  );
};

export default MenuRoot;
