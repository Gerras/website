import { CSSObject } from 'styled-components';
import HorizontalDivider from './DividerTypes/HorizontalDivider';
import React from 'react';
import VerticalDivider from './DividerTypes/VerticalDivider';

type Direction = 'vertical' | 'horizontal';

interface DividerProps {
  children?: React.ReactNode;
  directStyles?: CSSObject;
  direction?: Direction;
}

// Function for now since we probably want dividers with text, which will be different.
// Most likely styled divs.
const getComponent = (direction: Direction) => {
  if (direction === 'horizontal') {
    return HorizontalDivider;
  } else return VerticalDivider;
};

const Divider: React.FC<DividerProps> = (props) => {
  const direction = props.direction ?? 'vertical';

  const Component = getComponent(direction);

  return (
    <Component directStyles={props.directStyles}>{props.children}</Component>
  );
};

export default Divider;
