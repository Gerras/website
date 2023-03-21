import {
  ClosingTypes,
  InlineTypes,
  OpeningTypes,
  Tags
} from './Markdown.types';
import Break from '../Space/Break';
import ListItem from '../List/ListItem';
import { MarkdownNode } from './MarkdownNode.class';
import Token from 'markdown-it/lib/token';
import Typography from '../Typography/Typography';
import UnorderedList from '../List/UnorderedList';

export const ComponentMap: Record<
  Tags,
  {
    component: React.FC<any>; // Would like to get rid of this any at some point. Would need generics which is fun with constants.
    attributes: Record<string, string | boolean | number>;
  }
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

export const buildMarkdownNodes = (unparsedTokens: Token[]): MarkdownNode[] => {
  const rootNodes: MarkdownNode[] = [];

  const buildNodes = (nodes: Token[]) =>
    nodes.forEach((token) => {
      buildNode(token);
    });

  let currentNode: MarkdownNode | null = null;

  const buildNode = (token: Token) => {
    // If the token level is 0 and token is an opening type we are at a root node.
    if (token.level === 0 && token.type in OpeningTypes) {
      const rootNode = new MarkdownNode(token);
      currentNode = rootNode;
      rootNodes.push(rootNode);
      return;
    }
    // type check to make sure we haven't messed up and try and continue iterating without a node set.
    if (currentNode === null) {
      throw new Error('Current node should be set when reaching this point');
    }
    /**
     * If token is an opening then we want to:
     *  1. create a new node
     *  2. add it to the children of the current node
     *  3. set the parent as the current
     *  4. update the new node to be the current
     */
    if (token.type in OpeningTypes) {
      const node = new MarkdownNode(token);
      currentNode.Children.push(node);
      node.Parent = currentNode;
      currentNode = node;
    } else if (token.type in ClosingTypes) {
      // If we have a closing token type we want to set the current node to be the parent node.
      currentNode = currentNode.Parent;
    } else if (token.type in InlineTypes && token.children) {
      // InlineTypes should always have children
      buildNodes(token.children);
    } else {
      const node = new MarkdownNode(token);
      currentNode?.Children.push(node); // typescript bug. Gets confused because reassignment happens above, even though it isn't possible in this context.
    }
  };

  buildNodes(unparsedTokens);

  return rootNodes;
};
