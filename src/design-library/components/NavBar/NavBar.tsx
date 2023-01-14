import styled from 'styled-components';

interface NavBarProps {
  gutterBottom?: number;
  sticky: boolean;
  backgroundBlur?: boolean;
}

const NavBar = styled.header<NavBarProps>`
  backdrop-filter: ${(props) => (props.backgroundBlur ? 'blur(8px)' : 'none')};
  background-color: ${(props) =>
    props.backgroundBlur ? 'transparent' : props.theme.palette.background.main};
  border-bottom: ${(props) =>
    `1px solid ${props.theme.palette.secondary.main}`};
  margin-bottom: ${({ gutterBottom }) =>
    gutterBottom ? `${gutterBottom}px` : '24px'};
  padding: 8px;
  ${(props) => (props.sticky ? 'position: sticky; top: 0;' : null)}
`;

export default NavBar;
