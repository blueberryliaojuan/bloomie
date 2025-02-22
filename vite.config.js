import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

=======
>>>>>>> 7fad753 (Initial commit)
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
