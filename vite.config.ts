/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup_tests.ts",
    coverage: {
      provider: "v8",
      all: true,
      exclude: ["*.config.{js,ts}", "*.cjs"],
    },
  },
});
