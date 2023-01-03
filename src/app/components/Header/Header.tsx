import React from "react";
import { DefaultTheme } from "styled-components";
import Button from "../../../design-library/components/Button/Button";
import Menu from "../../../design-library/components/Menu/Menu";
import MenuItem from "../../../design-library/components/Menu/MenuItem";
import NavBar from "../../../design-library/components/NavBar/NavBar";
import NavContainer from "../../../design-library/components/NavBar/NavContainer";
import Typography from "../../../design-library/components/Typography/Typography";
import { darkTheme, defaultTheme } from "../../../design-library/styles/Theme";
import ThemeMenu from "../ThemeMenu/ThemeMenu";

interface HeaderProps {
  theme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <NavBar sticky>
      <NavContainer>
        <Typography directStyles={{ flex: 1 }}>Kevin Brauen</Typography>
        <ThemeMenu setTheme={props.setTheme} />
      </NavContainer>
    </NavBar>
  );
};
