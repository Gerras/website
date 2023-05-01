import React from 'react';
import RootStyled from '../Root/Root';
import { TypographyProps } from '../Typography/Typography';
import TypographyRoot from '../Typography/TypographyRoot';
import styled from 'styled-components';
interface LabelProps extends TypographyProps {
  htmlFor: string;
}

const LabelBase = styled(TypographyRoot)`
  color: ${(props) => props.theme.palette.background.contrastText};
`;

const StyledLabelBase = RootStyled(LabelBase);

const Label: React.FC<LabelProps> = (props) => {
  const gutterBottom = !!props.gutterBottom;
  const display = props.display;

  return (
    <StyledLabelBase
      as="label"
      display={display}
      gutterBottom={gutterBottom}
      variant="p"
      directStyles={props.directStyles}
      htmlFor={props.htmlFor}
    >
      {props.children}
    </StyledLabelBase>
  );
};

export default Label;
