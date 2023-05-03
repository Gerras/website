import styled, { CSSObject } from 'styled-components';

export type Shadow = 0 | 1 | 2 | 4 | 6 | 8;

/** left to right per box shadow:
 *    shadow1: inset,
 *    shadow2: regular drop shadow,
 *    shadow3: 2px shadow for border effect */
/* offset-x | offset-y | blur-radius | spread-radius | color */
const boxShadowMap: Record<Shadow, string> = {
  '0': 'none',
  '1': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  '2': '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  '4': '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  '6': '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
  '8': '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)'
};

interface OverlayContentRootProps {
  shadow: Shadow;
  directStyles?: CSSObject;
}

const OverlayContentRoot = styled.div<OverlayContentRootProps>`
  opacity: 1;
  border-radius: 4px;
  box-shadow: ${(props) => boxShadowMap[props.shadow]};
  background-color: ${(props) => props.theme.palette.background.main};
`;

export default OverlayContentRoot;
