import React from 'react';
import RootStyled from '../Root/Root';
import { TypographyProps } from '../Typography/Typography';
import TypographyRoot from '../Typography/TypographyRoot';
import styled from 'styled-components';
interface LabelProps extends TypographyProps {
  id: string;
}

const LinkBase = styled(TypographyRoot)`
  color: ${(props) => props.theme.palette.background.contrastText};
`;

const StyledLinkBase = RootStyled(LinkBase);

const Link: React.FC<LabelProps> = (props) => {
  const variant = props.variant ?? 'p';
  const gutterBottom = !!props.gutterBottom;
  const display = props.display;

  return (
    <StyledLinkBase
      as="label"
      display={display}
      gutterBottom={gutterBottom}
      variant={variant}
      directStyles={props.directStyles}
      id={props.id}
    >
      {props.children}
    </StyledLinkBase>
  );
};

export default Link;
