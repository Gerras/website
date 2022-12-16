import React, { ComponentType } from "react";
import styled, { StyledComponent } from "styled-components";

type MaxWidth = "xs" | "sm" | "md" | "lg" | "xl";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth: MaxWidth;
}

interface ContainerRootProps {
  maxWidth?: string;
}

interface ContainerBaseProps {
  containerWidth: string | null;
}

const ContainerRoot = styled.div<ContainerRootProps>`
  background-color: ${(props) => props.theme.palette.background.main};
  height: 100vh;
`;

const ContainerBase = styled.div<ContainerBaseProps>`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: ${(props) => props.containerWidth ?? "0"}) {
    max-width: ${(props) => props.containerWidth ?? "0"};
  }
`;

const maxWidthMap: Record<MaxWidth, string | null> = {
  xs: null,
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1500px",
};

const Container: React.FC<ContainerProps> = (props) => {
  const containerWidth = maxWidthMap[props.maxWidth];
  return (
    <ContainerBase containerWidth={containerWidth}>
      <ContainerRoot>{props.children}</ContainerRoot>
    </ContainerBase>
  );
};

export default Container;
