import MarkDownIt from 'markdown-it';
import { MarkdownNode } from './MarkdownNode.class';
import React from 'react';
import { buildMarkdownNodes } from './Markdown.utils';
import styled from 'styled-components';

interface MarkDownProps {
  markdown: string;
}

const MarkdownContainer = styled.div`
  padding: 0.325rem;
  border: ${(props) => `1px solid ${props.theme.palette.grey.g500}`};
  border-radius: ${(props) => props.theme.borderRadius};
  min-height: 56px;
`;

const Markdown: React.FC<MarkDownProps> = ({ markdown }) => {
  const md = new MarkDownIt();
  const parsed = md.parse(markdown, {});
  console.log('parsed', parsed);
  const parsedNodes = buildMarkdownNodes(parsed);
  console.log('nodes', parsedNodes);

  const renderParsedMarkdown = () => {
    const renderNodes = (nodes: MarkdownNode[]) => nodes.map(renderNode);

    const renderNode = (node: MarkdownNode) => {
      const Component = node.Component;
      if (!Component) return null;
      if (node.Children.length > 0) {
        return (
          <Component {...node.Attributes}>
            {renderNodes(node.Children)}
          </Component>
        );
      } else {
        return <Component {...node.Attributes} />;
      }
    };
    return renderNodes(parsedNodes);
  };

  return <MarkdownContainer>{renderParsedMarkdown()}</MarkdownContainer>;
};

export default Markdown;
