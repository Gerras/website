import React from 'react';
import styled from 'styled-components';

interface ListProps {
  children?: React.ReactNode;
  width?: number;
  component?: 'ul' | 'nav';
}

interface ListRootProps {
  width: number;
}

const ListRoot = styled.ul<ListRootProps>`
  list-style-type: none;
  min-width: ${(props) => `${props.width}px`};
`;

const List: React.FC<ListProps> = (props) => {
  return (
    <ListRoot as={props.component} width={props.width ?? 100}>
      {props.children}
    </ListRoot>
  );
};

export default List;
