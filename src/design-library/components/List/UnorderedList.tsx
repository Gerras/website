import React from 'react';
import styled from 'styled-components';

interface UnorderedListProps {
  children?: React.ReactNode;
}

const UnorderedListRoot = styled.ul``;

const UnorderedList: React.FC<UnorderedListProps> = (props) => {
  return <UnorderedListRoot>{props.children}</UnorderedListRoot>;
};

export default UnorderedList;
