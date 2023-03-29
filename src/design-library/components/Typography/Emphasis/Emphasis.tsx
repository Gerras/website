import React from 'react';
import styled from 'styled-components';
interface EmphasisProps {
  children?: React.ReactNode;
}

const EmphasisRoot = styled.em``;

const Emphasis: React.FC<EmphasisProps> = (props) => {
  return <EmphasisRoot>{props.children}</EmphasisRoot>;
};

export default Emphasis;
