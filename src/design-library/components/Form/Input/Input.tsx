import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const InputRoot = styled.input`
  padding: 4px;
  font-size: 1rem;
`;

const Input: React.FC<InputProps> = (props) => {
  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log('Input On change', event.currentTarget);
  };
  return (
    <InputRoot onChange={handleOnChange} {...props}>
      {props.children}
    </InputRoot>
  );
};

export default Input;
