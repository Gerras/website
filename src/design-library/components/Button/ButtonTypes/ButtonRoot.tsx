import styled from 'styled-components';
import type { ButtonSize } from '../Button.types';

export interface ButtonRootProps {
  size: ButtonSize;
}

const fontSizeMap: Record<ButtonSize, string> = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.2rem'
};

const ButtonRoot = styled.button<ButtonRootProps>`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin: 8px;
  min-width: 64px;
  font-size: ${(props) => fontSizeMap[props.size]};
`;

export default ButtonRoot;
