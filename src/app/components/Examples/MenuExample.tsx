import React, { useState } from 'react';
import Button from '../../../design-library/components/Button/Button';
import Menu from '../../../design-library/components/Menu/Menu';
import MenuItem from '../../../design-library/components/Menu/MenuItem';

const MenuExample: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <Button onClick={handleMenuClick}>I am a menu</Button>
      <Menu anchor={anchorEl} open={!!anchorEl} onClose={handleClose}>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
        <MenuItem>Menu Item 4</MenuItem>
      </Menu>
    </>
  );
};

export default MenuExample;
