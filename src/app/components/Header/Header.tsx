import React from "react";
import { DefaultTheme } from "styled-components";
import Button from "../../../design-library/Button/Button";
import NavBar from "../../../design-library/NavBar/NavBar";
import NavContainer from "../../../design-library/NavBar/NavContainer";
import Typography from "../../../design-library/Typography/Typography";
import { darkTheme, defaultTheme } from "../../../styles/Theme";

interface HeaderProps {
  theme: DefaultTheme;
  onButtonClick: (theme: DefaultTheme) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
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
        <Button type="primary" size="md" onClick={handleOnClick}>
          Click me to switch theme
        </Button>
      </NavContainer>
    </NavBar>
  );
};
