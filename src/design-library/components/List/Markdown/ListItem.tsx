import React from 'react';
import styled from 'styled-components';
interface ListItemProps {
  children?: React.ReactNode;
}

const ListItemRoot = styled.li``;

const ListItem: React.FC<ListItemProps> = (props) => {
  return <ListItemRoot>{props.children}</ListItemRoot>;
};

export default ListItem;
