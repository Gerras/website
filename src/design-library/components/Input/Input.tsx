import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export const InputRoot = styled.input`
  padding: 4px;
  font-size: 1rem;
`;

const Input: React.FC<InputProps> = (props) => {
  return <InputRoot {...props}>{props.children}</InputRoot>;
};

export default Input;
