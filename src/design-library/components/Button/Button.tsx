import React from "react";
import type { ButtonSize, ButtonType } from "./Button.types";
import { buttonComponentMap } from "./Button.utils";

interface ButtonProps {
  children: React.ReactNode;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  type: ButtonType;
}

const Button: React.FC<ButtonProps> = (props) => {
  const ButtonComponent = buttonComponentMap[props.type];
  const size = props.size ?? "md";
  return (
    <ButtonComponent id={props.id} onClick={props.onClick} size={size}>
      {props.children}
    </ButtonComponent>
  );
};

export default Button;
