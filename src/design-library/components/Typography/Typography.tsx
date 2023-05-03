import { Display, Variant } from './Typography.types';
import React, { ReactNode } from 'react';
import { CSSObject } from 'styled-components';
import RootStyled from '../RootStyled/RootStyled';
import TypographyRoot from './TypographyRoot';

export interface TypographyProps {
  children?: ReactNode;
  display?: Display;
  gutterBottom?: boolean;
  variant?: Variant;
  directStyles?: CSSObject;
}

const StyledTypoGraphyRoot = RootStyled(TypographyRoot);

const Typography: React.FC<TypographyProps> = (props) => {
  const variant = props.variant ?? 'p';
  const gutterBottom = !!props.gutterBottom;
  const display = props.display;

  return (
    <StyledTypoGraphyRoot
      as={variant}
      display={display}
      gutterBottom={gutterBottom}
      variant={variant}
      directStyles={props.directStyles}
    >
      {props.children}
    </StyledTypoGraphyRoot>
  );
};

export default Typography;
