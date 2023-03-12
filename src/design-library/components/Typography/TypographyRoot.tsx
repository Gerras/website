import { Display, Variant } from './Typography.types';
import styled, { CSSObject } from 'styled-components';
import { FontSize } from '../../types/font-size.type';

interface TypographyRootProps {
  display?: Display;
  gutterBottom: boolean;
  variant: Variant;
  directStyles?: CSSObject;
}

const fontSizeMap: Record<Variant, FontSize> = {
  p: '1rem',
  h6: '1.5rem',
  h5: '2rem',
  h4: '2.5rem',
  h3: '3rem',
  h2: '3.5rem',
  h1: '4rem'
};

const TypographyRoot = styled.span<TypographyRootProps>`
  font-weight: 400;
  color: ${(props) => props.theme.palette.background.contrastText};
  display: ${(props) => props.display};
  font-size: ${(props) => fontSizeMap[props.variant]};
  margin-bottom: ${(props) => (props.gutterBottom ? '0.35em' : '0')};
`;

export default TypographyRoot;
