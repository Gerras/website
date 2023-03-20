import React, { useState } from 'react';
import MarkDownIt from 'markdown-it';
import MarkdownInput from './MarkdownInput';
import Token from 'markdown-it/lib/token';
import Typography from '../Typography/Typography';
import styled from 'styled-components';

interface MarkDownProps {
  markdown: string;
}

const MarkdownContainer: React.FC = () => {
  const [markDown, setMarkDown] = useState<string>('');
  const handleOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMarkDown(e.currentTarget.value);
  };

  return (
    <>
      <MarkdownInput
        onChange={handleOnChange}
        id="markdown123"
        label="markdown123"
      />
      <Markdown markdown={markDown} />
    </>
  );
};

// enum TextTypes {
//   'text',
//   'softbreak'
// }

enum InlineTypes {
  'inline'
}

enum OpeningTypes {
  'paragraph_open',
  'bullet_list_open',
  'list_item_open',
  'heading_open'
}

enum ClosingTypes {
  'paragraph_close',
  'bullet_list_close',
  'list_item_close',
  'heading_close'
}

type Tags = 'p' | 'br' | 'ul' | 'li' | 'h1' | 'h2' | 'h3' | 'h4';

const Break = styled.br``;
const UnorderedList = styled.ul``;
const ListItem = styled.li``;
const Text: React.FC<{ content: string }> = ({ content }) => {
  return <>{content}</>;
};

const ComponentMap: Record<
  Tags,
  { component: React.FC<any>; attributes: Record<string, any> }
> = {
  br: { component: Break, attributes: {} },
  p: { component: Typography, attributes: { gutterBottom: true } },
  h1: { component: Typography, attributes: { variant: 'h1' } },
  h2: { component: Typography, attributes: { variant: 'h2' } },
  h3: { component: Typography, attributes: { variant: 'h3' } },
  h4: { component: Typography, attributes: { variant: 'h4' } },
  li: { component: ListItem, attributes: {} },
  ul: { component: UnorderedList, attributes: {} }
};

class Node {
  constructor(token: Token) {
    if (token.type === 'text') {
      this.component = Text;
      this.attributes = { content: token.content };
    } else {
      const { component, attributes } = ComponentMap[token.tag as Tags];
      this.component = component;
      this.attributes = attributes;
    }
  }
  public children: Node[] = [];
  public component: React.FC<any> | null = null;
  public attributes: Record<string, any> = {};
  public parentNode: Node | null = null;
}

const build = (unparsedTokens: Token[]): Node[] => {
  const rootNodes: Node[] = [];
  // let nesting = 0;
  const buildNodes = (nodes: Token[]) => {
    for (let index = 0; index < nodes.length; index++) {
      const token = nodes[index];
      buildNode(token);
    }
  };
  let currentNode: Node | null = null;
  const buildNode = (token: Token) => {
    let node: Node | null = null;
    // If the token level is 0 and token is an opening type we are at a root node
    if (token.level === 0 && token.type in OpeningTypes) {
      const rootNode = new Node(token);
      currentNode = rootNode;
      rootNodes.push(rootNode);
      return;
    }
    // Mostly a type check, but we really shouldn't be iterating past the root nodes without having a current node set. I might make this throw an exception.
    if (currentNode === null) {
      return;
    }
    /**
     * If token is an opening then we want to:
     * 1. create a new node
     * 2. add it to the children of the current node \
     * 3. set the parent as the current
     * 4. update the new node to be the current
     */
    if (token.type in OpeningTypes) {
      node = new Node(token);
      currentNode.children.push(node);
      node.parentNode = currentNode;
      currentNode = node;
      // nesting += token.nesting;
    } else if (token.type in ClosingTypes) {
      /**
       * If we have a closing token type we want to set the current node to be the parent node.
       */
      // nesting += token.nesting;
      currentNode = currentNode.parentNode;
    } else if (token.type in InlineTypes) {
      // This needs to know if it should be passing in the currentNode or it's parentNode
      if (token.children) buildNodes(token.children);
    } else {
      const textNode = new Node(token);
      currentNode?.children.push(textNode); // typescript bug. Gets confused because reassignment happens above, even though it isn' possible in this context.
    }
  };

  buildNodes(unparsedTokens);

  return rootNodes;
};

const Markdown: React.FC<MarkDownProps> = ({ markdown }) => {
  const md = new MarkDownIt();
  const parsed = md.parse(markdown, {});
  console.log('parsed', parsed);
  const parsedNodes = build(parsed);
  console.log('nodes', parsedNodes);

  const renderParsedMarkdown = () => {
    const renderNodes = (nodes: Node[]) => {
      return nodes.map((child) => {
        return renderNode(child);
      });
    };
    const renderNode = (node: Node) => {
      const Component = node.component;
      if (!Component) return;
      if (node.children.length > 0) {
        return (
          <Component {...node.attributes}>
            {renderNodes(node.children)}
          </Component>
        );
      } else {
        return <Component {...node.attributes} />;
      }
    };
    return renderNodes(parsedNodes);
  };

  return <>{renderParsedMarkdown()}</>;
};

export default MarkdownContainer;
