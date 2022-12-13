import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  rootDir: "src",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
};

export default config;
