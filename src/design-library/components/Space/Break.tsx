import React from 'react';
import styled from 'styled-components';
interface BreakProps {
  children?: React.ReactNode;
}

const BreakRoot = styled.br``;

const Break: React.FC<BreakProps> = (props) => {
  return <BreakRoot>{props.children}</BreakRoot>;
};

export default Break;
