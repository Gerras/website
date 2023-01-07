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
    const selected = theme.name === themeContext.name;
    const handleOnClick = () => {
      if (theme.name === themeContext.name) {
        return;
      }
      props.setTheme(theme);
    };
    return (
      <MenuItem
        key={theme.name}
        onClick={handleOnClick}
        selected={selected}
        directStyles={{ display: "flex", justifyContent: "space-between" }}
      >
        {theme.name}
        {selected ? <i className="fa-regular fa-square-check" /> : null}
      </MenuItem>
    );
  };

  return (
    <>
      <Button onClick={handleMenuClick}>Choose Theme</Button>
      <Menu anchor={anchorEl} open={!!anchorEl} onClose={handleClose}>
        {THEMES.map(renderMenuItem)}
        <MenuItem>
          DSJAKDJSKAJ DJSAKLDJSAKJDKLS ADJSKALDJKSLAJK DLSAJDLSAK JDSALKJDSALKJ
          DSAJKDLSALKDSJAKL DSAKLJ DJKSLADJKLSAJKLDSAJKLDSAJKLDSAJKDSLA
          DJSAKLDJKSLADSJKLA
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThemeMenu;
