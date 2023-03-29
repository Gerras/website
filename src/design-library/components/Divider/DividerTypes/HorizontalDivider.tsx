import DividerRoot from './DividerRoot';
import styled from 'styled-components';

const HorizontalDivider = styled(DividerRoot)`
  border-width: 0;
  border-color: ${(props) => props.theme.palette.grey.g800};
  border-bottom-width: thin;
`;

export default HorizontalDivider;
