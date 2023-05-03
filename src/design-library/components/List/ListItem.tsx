import styled, { CSSObject } from 'styled-components';
import React from 'react';

interface ListItemProps {
  children?: React.ReactNode;
  selected?: boolean;
}

interface ListItemRootProps {
  directStyles?: CSSObject;
}

const ListItemRoot = styled.li<ListItemRootProps>`
  color: ${(props) => props.theme.palette.background.contrastText};
  cursor: pointer;
  padding: 8px;
  white-space: nowrap;

  :first-child {
    border-radius: 4px 4px 0 0;
  }

  :last-child {
    border-radius: 0 0 4px 4px;
  }
`;

const ListItem: React.FC<ListItemProps> = (props) => {
  return <ListItemRoot>{props.children}</ListItemRoot>;
};

export default ListItem;
