import React from 'react';
import RootStyled from '../Root/Root';
import { TypographyProps } from '../Typography/Typography';
import TypographyRoot from '../Typography/TypographyRoot';
import styled from 'styled-components';

interface LinkProps extends TypographyProps {
  href?: string;
}

const LinkBase = styled(TypographyRoot)`
  color: ${(props) => props.theme.palette.primary.main};
  text-decoration: underline;
  cursor: pointer;
`;

const StyledLinkBase = RootStyled(LinkBase);

const Link: React.FC<LinkProps> = (props) => {
  const variant = props.variant ?? 'p';
  const gutterBottom = !!props.gutterBottom;
  const display = props.display;

  return (
    <StyledLinkBase
      as="a"
      display={display}
      gutterBottom={gutterBottom}
      variant={variant}
      directStyles={props.directStyles}
      href={props.href}
    >
      {props.children}
    </StyledLinkBase>
  );
};

export default Link;
