import type { ButtonSize, ButtonType } from './Button.types';
import { CSSObject } from 'styled-components';
import LinkButton from './ButtonTypes/LinkButton';
import React from 'react';
import { buttonComponentMap } from './Button.utils';

interface ButtonProps {
  children: React.ReactNode;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  type?: ButtonType;
  href?: string;
  directStyles?: CSSObject;
}

const Button: React.FC<ButtonProps> = (props) => {
  const size = props.size ?? 'md';
  if (props.href) {
    return (
      <LinkButton
        id={props.id}
        href={props.href}
        size={size}
        directStyles={props.directStyles}
      >
        {props.children}
      </LinkButton>
    );
  }

  const ButtonComponent = buttonComponentMap[props.type ?? 'primary'];
  return (
    <ButtonComponent
      id={props.id}
      onClick={props.onClick}
      size={size}
      directStyles={props.directStyles}
    >
      {props.children}
    </ButtonComponent>
  );
};

export default Button;
