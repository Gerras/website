import styled from "styled-components";

interface NavBarProps {
  gutterBottom?: number;
}

const NavBar = styled.header<NavBarProps>`
  padding: 8px;
  border-bottom: ${(props) =>
    `1px solid ${props.theme.palette.secondary.main}`};
  margin-bottom: ${({ gutterBottom }) =>
    gutterBottom ? `${gutterBottom}px` : "24px"};
`;

export default NavBar;
