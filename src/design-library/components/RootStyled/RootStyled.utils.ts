import { CSSObject } from 'styled-components';

export const translateStyles = (styles?: CSSObject) => {
  if (!styles) {
    return '';
  }

  return Object.entries(styles)
    .reduce<string>((acc, [key, value]) => {
      const regexResponse = key.split(/(?=[A-Z])/);
      const lowerCaseList = regexResponse.map((regexValue) =>
        regexValue.toLowerCase()
      );
      const cssKey = lowerCaseList.join('-');
      const combineKeyValue = `${cssKey}: ${value}; `;
      acc += combineKeyValue;
      return acc;
    }, '')
    .trimEnd();
};
