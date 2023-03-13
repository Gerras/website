import React from 'react';
import styled from 'styled-components';

interface CodeProps {
  children?: React.ReactNode;
}

const CodeWrapper = styled.div`
  border-radius: 10px;
  overflow: auto;
  margin-bottom: 1.75rem;
  background-color: #4b2a57;
  /* This needs to be put into the theme */
`;

const Pre = styled.pre`
  color: ${(props) => props.theme.palette.common.white};
  font-family: Consolas, Menlo, Monaco, source-code-pro;
  background: none;
  font-feature-settings: normal;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  margin-bottom: 0;
  tab-size: 4;
  hyphens: none;
`;

export const CodeBase = styled.code`
  color: ${(props) => props.theme.palette.common.white};
  font-family: Consolas, Menlo, Monaco, source-code-pro;
  background: none;
  font-feature-settings: normal;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  margin-bottom: 0;
  tab-size: 4;
  hyphens: none;
`;

export const InlineCode = styled(CodeBase)`
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

const Code: React.FC<CodeProps> = (props) => {
  return (
    <CodeWrapper>
      <Pre>
        <CodeBase>{props.children}</CodeBase>
      </Pre>
    </CodeWrapper>
  );
};

export default Code;
