import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-evenly;
  @media (min-width: 600px) {
    min-height: 64px;
  }
`;

export default NavContainer;
