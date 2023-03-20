import CodeRoot from './CodeRoot';
import styled from 'styled-components';

const InlineCode = styled(CodeRoot)`
  color: ${(props) => props.theme.palette.background.contrastText};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${({
    theme: {
      palette: {
        secondary: {
          rgbMain: { r, g, b }
        }
      }
    }
  }) => `rgba(${r}, ${g}, ${b}, 0.5)`};
  padding: 0.15em 0.2em 0.05em;
`;

export default InlineCode;
