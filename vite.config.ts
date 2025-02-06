import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
