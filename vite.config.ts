import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react({
      exclude: ["/src/assets/images"],
    }),
  ],
  assetsInclude: ["/src/assets/images/new/webp-format/*.webp"],
});
