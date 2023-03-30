import React from 'react';
import styled from 'styled-components';
interface BoldEmphasisProps {
  children?: React.ReactNode;
}

const BoldEmphasisRoot = styled.strong``;

const BoldEmphasis: React.FC<BoldEmphasisProps> = (props) => {
  return <BoldEmphasisRoot>{props.children}</BoldEmphasisRoot>;
};

export default BoldEmphasis;
