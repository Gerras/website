import styled from "styled-components";
import React, { ReactNode } from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type Display = "block" | "flex";

interface TypographyProps {
  children?: ReactNode;
  display?: Display;
  gutterBottom?: boolean;
  variant?: Variant;
}

interface TypographyRootProps {
  display: Display;
  gutterBottom: boolean;
  variant: Variant;
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
  margin-bottom: 0.35em;
`;

const TypoGraphy: React.FC<TypographyProps> = (props) => {
  const variant = props.variant ?? "p";
  const gutterBottom = !!props.gutterBottom;
  const display = props.display ?? "block";

  return (
    <TypographyRoot
      as={variant}
      display={display}
      gutterBottom={gutterBottom}
      variant={variant}
    >
      {props.children}
    </TypographyRoot>
  );
};

export default TypoGraphy;
