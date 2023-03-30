import { MarkdownNodeBuilder } from './Markdown.utils';
import { MarkdownNodeType } from './Markdown.types';
import Token from 'markdown-it/lib/token';

export class MarkdownNode {
  private children: MarkdownNode[] = [];

  private component: React.FC<any> | null = null;

  private attributes: Record<string, string | boolean | number> = {};

  private parentNode: MarkdownNode | null = null;

  constructor(parentNode: MarkdownNode | null, token: Token) {
    const rule = MarkdownNodeBuilder[token.type as MarkdownNodeType];
    const { component, attributes } = rule(token);
    this.component = component;
    this.attributes = attributes;
    this.parentNode = parentNode;
  }

  public get Children() {
    return this.children;
  }

  public get Component() {
    return this.component;
  }

  public get Attributes() {
    return this.attributes;
  }

  public get Parent() {
    return this.parentNode;
  }

  public set Parent(node: MarkdownNode | null) {
    this.parentNode = node;
  }
}
