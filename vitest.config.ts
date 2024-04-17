// The below line is optional
/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  // without plugins
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [
      "./src/setup.tests.ts"
    ]
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      }
    ]
  }
});