import styled, {
  DefaultTheme,
  CSSObject,
  StyledComponent
} from 'styled-components';
import { translateStyles } from '../Typography/Typography.utils';

/**
 * A specialized styled component that takes a "directStyles" prop that allows for overriding the components default styling behavior.
 *
 * @param StyledComponent The component to expose the CSSObject for direct styling.
 * @returns A component with direct styling enabled.
 */
const RootStyled = <TProps, TElement extends keyof JSX.IntrinsicElements>(
  StyledComponent: StyledComponent<
    TElement,
    DefaultTheme,
    TProps extends { directStyles?: CSSObject } ? TProps : never,
    never
  >
) => {
  return styled(StyledComponent)`
    ${(props) => translateStyles(props.directStyles)}
  `;
};

export default RootStyled;
