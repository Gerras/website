export enum TextTypes {
  'text',
  'code_inline'
}

export enum BreakTypes {
  'softbreak'
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

export enum ClosingTypes {
  'paragraph_close',
  'bullet_list_close',
  'ordered_list_close',
  'list_item_close',
  'heading_close',
  'em_close'
}

export const MarkdownTypeConst = {
  ...BreakTypes,
  ...ClosingTypes,
  ...InlineTypes,
  ...OpeningTypes,
  ...TextTypes
};

export type MarkdownNodeType =
  | keyof typeof BreakTypes
  | keyof typeof OpeningTypes
  | keyof typeof TextTypes;

export type MarkDownType =
  | keyof typeof BreakTypes
  | keyof typeof ClosingTypes
  | keyof typeof InlineTypes
  | keyof typeof OpeningTypes
  | keyof typeof TextTypes;

export type Tags =
  | 'p'
  | 'br'
  | 'ul'
  | 'li'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'code'
  | 'em';
