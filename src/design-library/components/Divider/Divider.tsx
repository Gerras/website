import styled, { CSSObject } from 'styled-components';
import React from 'react';
import RootStyled from '../Root/Root';

interface DividerProps {
  children?: React.ReactNode;
  directStyles?: CSSObject;
  direction?: 'vertical' | 'horizontal';
}

interface DividerRootProps {
  directStyles?: CSSObject;
  direction: 'vertical' | 'horizontal';
}
// Need to make a horizontal verision of this bad boy
const DividerRoot = styled.hr<DividerRootProps>`
  margin: 0px;
  flex-shrink: 0;
  border-width: 0px thin 0px 0px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.12); // Fix this coloring
  height: auto;
  align-self: stretch;
`;

const StyledDividerRoot = RootStyled(DividerRoot);

const Divider: React.FC<DividerProps> = (props) => {
  const direction = props.direction ?? 'vertical';
  return (
    <StyledDividerRoot directStyles={props.directStyles} direction={direction}>
      {props.children}
    </StyledDividerRoot>
  );
};

export default Divider;
