import styled, {
  CSSObject,
  DefaultTheme,
  AnyStyledComponent,
  StyledComponent,
} from "styled-components";
import React, { ReactNode } from "react";
import { translateStyles } from "./Typography.utils";
import type { FontSize } from "../../types/font-size.type";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type Display = "block" | "flex";

interface TypographyProps {
  children?: ReactNode;
  display?: Display;
  gutterBottom?: boolean;
  variant?: Variant;
  directStyles?: CSSObject;
}

interface TypographyRootProps {
  display?: Display;
  gutterBottom: boolean;
  variant: Variant;
  styles: CSSObject;
}

const fontSizeMap: Record<Variant, FontSize> = {
  p: "1rem",
  h6: "1.5rem",
  h5: "2rem",
  h4: "2.5rem",
  h3: "3rem",
  h2: "3.5rem",
  h1: "4rem",
};

interface RootStyled {
  styles: CSSObject;
}

const TypographyRoot = styled.span<TypographyRootProps>`
  font-weight: 400;
  color: ${(props) => props.theme.palette.background.contrastText};
  display: ${(props) => props.display};
  font-size: ${(props) => fontSizeMap[props.variant]};
  margin-bottom: ${(props) => (props.gutterBottom ? "0.35em" : "0")};
  ${(props) => props.styles}
`;

// This needs to be moved out.
const RootStyled = (StyledComponent: AnyStyledComponent) => {
  return styled(StyledComponent)`
    ${(props) => translateStyles(props.directStyles)}
  `;
};

const StyledTypoGraphyRoot = RootStyled(TypographyRoot);

const Typography: React.FC<TypographyProps> = (props) => {
  const variant = props.variant ?? "p";
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
