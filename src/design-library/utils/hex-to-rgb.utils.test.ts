import { hexToRgb } from "./hex-to-rgb.utils";

describe("Hex to RGB conversion", () => {
  test("Should convert hex string to RGB output", () => {
    const result = hexToRgb("#1976d2");
    expect(result).toEqual({ r: 25, g: 118, b: 210 });
  });
});
