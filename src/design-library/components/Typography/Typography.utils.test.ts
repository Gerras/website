import { CSSObject } from "styled-components";
import { translateStyles } from "./Typography.utils";

describe("Typopgrahy utils", () => {
  test("Should return converted CSSObject to string when css properties are simple", () => {
    const cssObject: CSSObject = {
      display: "flex",
      minWidth: "20px",
      backgroundBlendMode: "hard-light",
      color: "blue",
    };
    const result = translateStyles(cssObject);
    expect(result).toEqual(
      "display: flex; min-width: 20px; background-blend-mode: hard-light; color: blue;"
    );
  });
});
