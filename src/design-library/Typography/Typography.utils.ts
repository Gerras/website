import { CSSObject } from "styled-components";

export const translateStyles = (styles?: CSSObject) => {
  if (!styles) return "";
  const stylesString = Object.entries(styles).reduce<string>(
    (acc, [key, value]) => {
      const regexResponse = key.split(/(?=[A-Z])/);
      const lowerCase = regexResponse.map((value) => value.toLowerCase());
      const cssValues = lowerCase.join("-");
      const combineKeyValue = `${cssValues}: ${value}; `;
      acc += combineKeyValue;
      return acc;
    },
    ""
  );
  return stylesString.trimEnd();
};
