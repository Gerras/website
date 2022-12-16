import React from "react";
import styled from "styled-components";

type MaxWidth = "xs" | "sm" | "md" | "lg" | "xl";

interface ContainerRootProps {
  maxWidth?: string;
}

interface ContainerBaseProps {
  containerWidth: string;
}

interface ContainerProps {
  children: React.ReactNode;
  maxWidth: MaxWidth;
}

const maxWidthMap: Record<MaxWidth, string | null> = {
  xs: null,
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1500px",
};

const ContainerRoot = styled.div<ContainerRootProps>`
  background-color: ${(props) => props.theme.palette.background.main};
  height: 100vh;
`;

const ContainerBase = styled.div<ContainerBaseProps>`
  box-sizing: border-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: ${(props) => props.containerWidth}) {
    max-width: ${(props) => props.containerWidth};
  }
`;

const Container: React.FC<ContainerProps> = (props) => {
  const containerWidth = maxWidthMap[props.maxWidth] ?? "0";
  return (
    <ContainerBase containerWidth={containerWidth}>
      <ContainerRoot>{props.children}</ContainerRoot>
    </ContainerBase>
  );
};

export default Container;
