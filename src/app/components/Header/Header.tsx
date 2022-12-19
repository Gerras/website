import React from "react";
import { DefaultTheme } from "styled-components";
import Button from "../../../design-library/components/Button/Button";
import Menu from "../../../design-library/components/Menu/Menu";
import MenuItem from "../../../design-library/components/Menu/MenuItem";
import NavBar from "../../../design-library/components/NavBar/NavBar";
import NavContainer from "../../../design-library/components/NavBar/NavContainer";
import Typography from "../../../design-library/components/Typography/Typography";
import { darkTheme, defaultTheme } from "../../../design-library/styles/Theme";

interface HeaderProps {
  theme: DefaultTheme;
  onButtonClick: (theme: DefaultTheme) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);
  const handleOnClick = () => {
    if (props.theme.name === "default") {
      props.onButtonClick(darkTheme);
    } else {
      props.onButtonClick(defaultTheme);
    }
  };

  return (
    <NavBar sticky>
      <NavContainer>
        <Typography directStyles={{ flex: 1 }}>Kevin Brauen</Typography>
        <Button type="tertiary" size="md" onClick={handleMenuClick}>
          Menu
        </Button>
        <Menu anchor={anchorEl} open={open} onClose={handleClose}>
          <MenuItem>MenuItem 1</MenuItem>
        </Menu>
        <Button type="primary" size="md" onClick={handleOnClick}>
          Click me to switch theme
        </Button>
      </NavContainer>
    </NavBar>
  );
};
