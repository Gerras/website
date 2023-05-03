import React from 'react';
import Typography from '../Typography/Typography';
import styled from 'styled-components';
interface ListItemTextProps {
  children?: React.ReactNode;
}

const ListItemTextRoot = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const ListItemText: React.FC<ListItemTextProps> = (props) => {
  return (
    <ListItemTextRoot>
      <Typography>{props.children}</Typography>
    </ListItemTextRoot>
  );
};

export default ListItemText;
