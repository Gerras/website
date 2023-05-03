import React from 'react';
import styled from 'styled-components';

interface ListItemButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
}

interface ListItemButtonRoot {
  selected: boolean;
}

const ListItemButtonRoot = styled.div<ListItemButtonRoot>`
  display: flex;
  cursor: pointer;
  background-color: ${({
    selected,
    theme: {
      palette: {
        background: {
          rgbContrastText: { r, g, b }
        }
      }
    }
  }) => (selected ? `rgba(${r}, ${g}, ${b}, 0.1)` : '')};

  :hover {
    background-color: ${({
      theme: {
        palette: {
          background: {
            rgbContrastText: { r, g, b }
          }
        }
      }
    }) => `rgba(${r}, ${g}, ${b}, 0.12)`};
  }
`;

export const ListItemButton: React.FC<ListItemButtonProps> = (props) => {
  return (
    <ListItemButtonRoot
      selected={!!props.selected}
      onClick={props.onClick}
      role="button"
    >
      {props.children}
    </ListItemButtonRoot>
  );
};

export default ListItemButton;
