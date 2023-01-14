import ButtonRoot from './ButtonRoot';
import { paddingMap } from '../Button.utils';
import styled from 'styled-components';

const TertiaryButton = styled(ButtonRoot)`
  background-color: ${(props) => props.theme.palette.background.main};
  color: ${(props) => props.theme.palette.primary.main};
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
    }) => `rgba(${r}, ${g}, ${b}, 0.1)`};
  }
`;

export default TertiaryButton;
