import CodeRoot from './CodeRoot';
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
  background: none;
  color: ${(props) => props.theme.palette.common.white};
  font-family: Consolas, Menlo, Monaco, source-code-pro;
  font-feature-settings: normal;
  hyphens: none;
  line-height: 1.5;
  margin-bottom: 0;
  padding: 1rem;
  tab-size: 4;
  text-align: left;
  white-space: pre;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
`;

const Code: React.FC<CodeProps> = (props) => {
  return (
    <CodeWrapper>
      <Pre>
        <CodeRoot>{props.children}</CodeRoot>
      </Pre>
    </CodeWrapper>
  );
};

export default Code;
