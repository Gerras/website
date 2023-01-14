import styled from 'styled-components';
import { paddingMap } from '../Button.utils';
import ButtonRoot from './ButtonRoot';

const PrimaryButton = styled(ButtonRoot)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  padding: ${(props) => {
    const [leftRight, topBottom] = paddingMap[props.size];
    return `${leftRight}px ${topBottom}px;`;
  }};

  :hover {
    background-color: ${({
      theme: {
        palette: {
          primary: {
            rgbMain: { r, g, b }
          }
        }
      }
    }) => `rgba(${r}, ${g}, ${b}, 0.8)`};
  }
`;

export default PrimaryButton;
