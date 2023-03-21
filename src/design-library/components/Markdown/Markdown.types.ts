enum TextTypes {
  'text',
  'softbreak'
}

export enum InlineTypes {
  'inline'
}

export enum OpeningTypes {
  'paragraph_open',
  'bullet_list_open',
  'list_item_open',
  'heading_open'
}

export enum ClosingTypes {
  'paragraph_close',
  'bullet_list_close',
  'list_item_close',
  'heading_close'
}

export const MarkdownTypeConst = {
  ...TextTypes,
  ...InlineTypes,
  ...OpeningTypes,
  ...ClosingTypes
};

export type MarkDownType =
  | keyof typeof TextTypes
  | keyof typeof InlineTypes
  | keyof typeof OpeningTypes
  | keyof typeof ClosingTypes;

export type Tags = 'p' | 'br' | 'ul' | 'li' | 'h1' | 'h2' | 'h3' | 'h4';
