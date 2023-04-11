export enum TextTypes {
  'text',
  'code_inline'
}

export enum BreakTypes {
  'softbreak'
}

export enum FenceTypes {
  'fence'
}

export enum InlineTypes {
  'inline'
}

export enum OpeningTypes {
  'paragraph_open',
  'bullet_list_open',
  'ordered_list_open',
  'list_item_open',
  'heading_open',
  'em_open'
}

export enum RootTypes {
  'paragraph_open',
  'bullet_list_open',
  'ordered_list_open',
  'heading_open',
  'fence'
}

export enum ClosingTypes {
  'paragraph_close',
  'bullet_list_close',
  'ordered_list_close',
  'list_item_close',
  'heading_close',
  'em_close'
}

export type MarkdownNodeType =
  | keyof typeof BreakTypes
  | keyof typeof OpeningTypes
  | keyof typeof TextTypes
  | keyof typeof FenceTypes;

export type MarkDownType =
  | keyof typeof BreakTypes
  | keyof typeof ClosingTypes
  | keyof typeof InlineTypes
  | keyof typeof OpeningTypes
  | keyof typeof TextTypes
  | keyof typeof FenceTypes;

export type Tags =
  | 'p'
  | 'br'
  | 'ul'
  | 'ol'
  | 'li'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'code';

export type EmMarkdown = '_' | '*';
