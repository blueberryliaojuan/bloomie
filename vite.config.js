import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// in ES modules __dirname is not defined
// This is different from CommonJS modules, where __dirname is always available.
// npm add -D @types/node then we can use __dirname

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), //  '@' refer to `src`
      "~root": path.resolve(__dirname), //  '~root' refer to root directory
    },
  },
});
