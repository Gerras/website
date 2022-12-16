import React from "react";
import styled from "styled-components";

type ButtonType = "primary" | "secondary" | "tertiary";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ButtonRootProps {}

interface ButtonProps {
  children: React.ReactNode;
  id?: string;
  type: ButtonType;
  size: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonRoot = styled.button<ButtonRootProps>`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  border: none;
  border-radius: 4px;
  min-width: 64px;
  padding: 6px 16px;
  cursor: pointer;
  :hover {
    background-color: ${({
      theme: {
        palette: {
          primary: {
            rgbMain: { r, g, b },
          },
        },
      },
    }) => `rgba(${r}, ${g}, ${b}, 0.8)`};
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonRoot id={props.id} onClick={props.onClick}>
      {props.children}
    </ButtonRoot>
  );
};

export default Button;
