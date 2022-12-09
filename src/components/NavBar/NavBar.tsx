import styled from "styled-components";

const NavBar = styled.header`
  background-color: ${(props) => props.theme.palette.secondary.main};
  margin: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export default NavBar;
