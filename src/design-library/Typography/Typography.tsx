import styled, { CSSObject } from "styled-components";
import React, { ReactNode } from "react";
import { translateStyles } from "./Typography.utils";

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
  styles: string;
}

const fontSizeMap: Record<Variant, string> = {
  p: "1rem",
  h6: "1.5rem",
  h5: "2rem",
  h4: "2.5rem",
  h3: "3rem",
  h2: "3.5rem",
  h1: "4rem",
};

const TypographyRoot = styled.span<TypographyRootProps>`
  color: ${(props) => props.theme.palette.primary.contrastText};
  display: ${(props) => props.display};
  font-size: ${(props) => fontSizeMap[props.variant]};
  font-weight: 400;
  margin-bottom: ${(props) => (props.gutterBottom ? "0.35em" : "0")};
  ${(props) => props.styles}
`;

const Typography: React.FC<TypographyProps> = (props) => {
  const variant = props.variant ?? "p";
  const gutterBottom = !!props.gutterBottom;
  const display = props.display;
  const directStyles = translateStyles(props.directStyles);

  return (
    <TypographyRoot
      as={variant}
      display={display}
      gutterBottom={gutterBottom}
      variant={variant}
      styles={directStyles}
    >
      {props.children}
    </TypographyRoot>
  );
};

export default Typography;
