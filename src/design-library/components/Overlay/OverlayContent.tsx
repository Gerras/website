import OverlayContentRoot, { Shadow } from './OverlayContentRoot';
import { CSSObject } from 'styled-components';
import React from 'react';
import RootStyled from '../RootStyled/RootStyled';
import { forwardRef } from 'react';

interface OverlayContentProps {
  children?: React.ReactNode;
  directStyles?: CSSObject;
  shadow?: Shadow;
}

const StyledOverlayRoot = RootStyled(OverlayContentRoot);

const OverlayContent = forwardRef<HTMLDivElement, OverlayContentProps>(
  (props, ref) => {
    const shadow = props.shadow ?? 1;
    return (
      <StyledOverlayRoot
        ref={ref}
        directStyles={props.directStyles}
        shadow={shadow}
      >
        {props.children}
      </StyledOverlayRoot>
    );
  }
);

export default OverlayContent;
