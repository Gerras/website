import DividerRoot from './DividerRoot';
import styled from 'styled-components';

const VerticalDivider = styled(DividerRoot)`
  border-width: 0px thin 0px 0px;
  border-color: ${(props) => props.theme.palette.grey.g700};
  height: auto;
  align-self: stretch;
`;

export default VerticalDivider;
