import styled from 'styled-components';

const CodeRoot = styled.code`
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

export default CodeRoot;
