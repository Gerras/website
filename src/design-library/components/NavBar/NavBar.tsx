import styled from "styled-components";

interface NavBarProps {
  gutterBottom?: number;
  sticky: boolean;
}

const NavBar = styled.header<NavBarProps>`
  padding: 8px;
  backdrop-filter: blur(8px);
  border-bottom: ${(props) =>
    `1px solid ${props.theme.palette.secondary.main}`};
  margin-bottom: ${({ gutterBottom }) =>
    gutterBottom ? `${gutterBottom}px` : "24px"};
  ${(props) => (props.sticky ? "position: sticky; top: 0;" : null)}
`;

export default NavBar;
