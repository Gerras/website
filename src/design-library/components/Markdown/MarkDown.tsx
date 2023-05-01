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
  min-height: 56px;
`;

const Markdown: React.FC<MarkDownProps> = ({ markdown }) => {
  const md = new MarkDownIt();
  const parsed = md.parse(markdown, {});
  const parsedNodes = buildMarkdownNodes(parsed);

  const renderParsedMarkdown = () => {
    const renderNodes = (nodes: MarkdownNode[]) => nodes.map(renderNode);

    const renderNode = (node: MarkdownNode) => {
      const Component = node.Component;
      if (!Component) return null;
      if (node.Children.length > 0) {
        return (
          // Look into creating better keys for the preview.
          <Component key={node.Key} {...node.Attributes}>
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
