import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>"],
  // the following line is needed in order to grab modules from the
  // src folder without the need to write them relatively
  moduleDirectories: ["node_modules", "src"],
};

export default config;
