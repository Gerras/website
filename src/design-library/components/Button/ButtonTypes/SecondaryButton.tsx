import ButtonRoot from './ButtonRoot';
import { paddingMap } from '../Button.utils';
import styled from 'styled-components';

const SecondaryButton = styled(ButtonRoot)`
  background-color: ${(props) => props.theme.palette.background.main};
  color: ${(props) => props.theme.palette.primary.main};
  padding: ${(props) => {
    const [leftRight, topBottom] = paddingMap[props.size];
    return `${leftRight - 1}px ${topBottom - 1}px;`;
  }};
  border: ${({
    theme: {
      palette: {
        primary: {
          rgbMain: { r, g, b }
        }
      }
    }
  }) => `1px solid rgba(${r}, ${g}, ${b}, 0.5)`};

  :hover {
    border: ${(props) => `1px solid ${props.theme.palette.primary.main}`};
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

export default SecondaryButton;
