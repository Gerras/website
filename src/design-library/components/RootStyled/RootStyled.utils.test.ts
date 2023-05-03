import { CSSObject } from 'styled-components';
import { translateStyles } from './RootStyled.utils';

describe('Typopgrahy utils', () => {
  test('Should return converted CSSObject to string when css properties are simple', () => {
    const cssObject: CSSObject = {
      display: 'flex',
      minWidth: '20px',
      backgroundBlendMode: 'hard-light',
      color: 'blue',
      alignItems: 'center'
    };
    const result = translateStyles(cssObject);
    expect(result).toEqual(
      'display: flex; min-width: 20px; background-blend-mode: hard-light; color: blue; align-items: center;'
    );
  });
});
