import { ComponentMap, InlineTextComponentMap } from './Markdown.utils';
import { Tags, TextTypes } from './Markdown.types';
import Token from 'markdown-it/lib/token';

export class MarkdownNode {
  private children: MarkdownNode[] = [];

  private component: React.FC<any> | null = null;

  private attributes: Record<string, string | boolean | number> = {};

  private parentNode: MarkdownNode | null = null;

  constructor(token: Token) {
    if (token.type in TextTypes) {
      const { component, attributes } =
        InlineTextComponentMap[token.type as keyof typeof TextTypes];
      this.component = component;
      this.attributes = { ...attributes, children: token.content };
    } else {
      const { component, attributes } = ComponentMap[token.tag as Tags];
      this.component = component;
      this.attributes = attributes;
    }
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
