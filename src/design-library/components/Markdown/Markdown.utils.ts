import {
  ClosingTypes,
  EmMarkdown,
  InlineTypes,
  MarkdownNodeType,
  OpeningTypes,
  RootTypes,
  Tags
} from './Markdown.types';
import BoldEmphasis from '../Typography/Emphasis/BoldEmphasis';
import Break from '../Space/Break';
import Code from '../Code/Code';
import Emphasis from '../Typography/Emphasis/Emphasis';
import InlineCode from '../Code/InlineCode';
import ListItem from '../List/ListItem';
import { MarkdownNode } from './MarkdownNode.class';
import OrderedList from '../List/OrderedList';
import Text from '../Typography/Text/Text';
import Token from 'markdown-it/lib/token';
import Typography from '../Typography/Typography';
import UnorderedList from '../List/UnorderedList';

interface ComponentAttributeType {
  component: React.FC<any>; // Would like to get rid of this any at some point. Would need generics which is fun with constants.
  attributes: Record<string, string | boolean | number>;
}

export const TagComponentMap: Record<Tags, ComponentAttributeType> = {
  br: { component: Break, attributes: {} },
  p: { component: Typography, attributes: { gutterBottom: true } },
  h1: { component: Typography, attributes: { variant: 'h1' } },
  h2: { component: Typography, attributes: { variant: 'h2' } },
  h3: { component: Typography, attributes: { variant: 'h3' } },
  h4: { component: Typography, attributes: { variant: 'h4' } },
  li: { component: ListItem, attributes: {} },
  ul: { component: UnorderedList, attributes: {} },
  ol: { component: OrderedList, attributes: {} },
  code: { component: Code, attributes: {} }
};

export const EmphasisComponentMap: Record<EmMarkdown, ComponentAttributeType> =
  {
    '*': { component: BoldEmphasis, attributes: {} },
    _: { component: Emphasis, attributes: {} }
  };

// This is an improvement but the real cool part would be to have the markdownbuilder be able to build it's own ruleset.
export const MarkdownNodeBuilder: Record<
  MarkdownNodeType,
  (token: Token) => ComponentAttributeType & { key: string }
> = {
  bullet_list_open: (token: Token) => ({
    ...TagComponentMap[token.tag as Tags],
    key: token.type
  }),
  code_inline: (token: Token) => ({
    component: InlineCode,
    attributes: { children: token.content },
    key: token.type
  }),
  em_open: (token: Token) => ({
    ...EmphasisComponentMap[token.markup as EmMarkdown],
    key: token.type
  }),
  fence: (token: Token) => ({
    component: Code,
    attributes: { children: token.content },
    key: token.type
  }),
  heading_open: (token: Token) => ({
    ...TagComponentMap[token.tag as Tags],
    key: token.type
  }),
  list_item_open: (token: Token) => ({
    ...TagComponentMap[token.tag as Tags],
    key: token.type
  }),
  ordered_list_open: (token: Token) => ({
    ...TagComponentMap[token.tag as Tags],
    key: token.type
  }),
  paragraph_open: (token: Token) => ({
    ...TagComponentMap[token.tag as Tags],
    key: token.type
  }),
  softbreak: (token: Token) => ({
    ...TagComponentMap[token.tag as Tags],
    key: token.type
  }),
  text: (token: Token) => ({
    component: Text,
    attributes: { children: token.content },
    key: token.type
  })
};

export const buildMarkdownNodes = (unparsedTokens: Token[]): MarkdownNode[] => {
  const rootNodes: MarkdownNode[] = [];

  const buildNodes = (nodes: Token[]) =>
    nodes.forEach((token) => {
      buildNode(token);
    });

  let currentNode: MarkdownNode | null = null;
  const buildNode = (token: Token) => {
    // If the token level is 0 and token is an opening type we are at a root node.S
    if (token.level === 0 && token.type in RootTypes) {
      const rootNode = new MarkdownNode(null, token);
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
      const node = new MarkdownNode(currentNode, token);
      currentNode.Children.push(node);
      currentNode = node;
    } else if (token.type in ClosingTypes) {
      // If we have a closing token type we want to set the current node to be the parent node.
      currentNode = currentNode.Parent;
    } else if (token.type in InlineTypes && token.children) {
      // InlineTypes should always have children
      buildNodes(token.children);
    } else {
      const node = new MarkdownNode(currentNode, token);
      currentNode?.Children.push(node); // typescript bug. Gets confused because reassignment happens above, even though it isn't possible in this context.
    }
  };

  buildNodes(unparsedTokens);

  return rootNodes;
};
