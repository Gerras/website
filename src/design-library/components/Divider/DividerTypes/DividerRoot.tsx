import styled, { CSSObject } from 'styled-components';

interface DividerRootProps {
  directStyles?: CSSObject;
}

const DividerRoot = styled.hr<DividerRootProps>`
  margin: 0;
  flex-shrink: 0;
  border-style: solid;
`;

export default DividerRoot;
