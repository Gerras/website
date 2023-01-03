import React from "react";
import { DefaultTheme, useTheme } from "styled-components";
import Button from "../../../design-library/components/Button/Button";
import Menu from "../../../design-library/components/Menu/Menu";
import MenuItem from "../../../design-library/components/Menu/MenuItem";
import { THEMES } from "../../../design-library/styles/Theme";

interface ThemeMenuProps {
  setTheme: (theme: DefaultTheme) => void;
}

const ThemeMenu: React.FC<ThemeMenuProps> = (props) => {
  const themeContext = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const renderMenuItem = (theme: DefaultTheme) => {
    const handleOnClick = () => {
      if (theme.name === themeContext.name) {
        return;
      }
      props.setTheme(theme);
    };
    return (
      <MenuItem onClick={handleOnClick}>
        {theme.name}
        {/* @ts-ignore */}
        <i className="fa-regular fa-square-check" />
      </MenuItem>
    );
  };

  return (
    <>
      <Button onClick={handleMenuClick}>Menu</Button>
      <Menu anchor={anchorEl} open={!!anchorEl} onClose={handleClose}>
        {THEMES.map(renderMenuItem)}
      </Menu>
    </>
  );
};

export default ThemeMenu;
