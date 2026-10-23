import { defineConfig } from "vite";

export default defineConfig({
  // Relative asset paths, so the build works at any address
  // (GitHub Pages project URL, a portfolio subfolder, or a custom domain).
  base: "./",
  server: { host: true }, // also reachable from your phone on the same Wi-Fi (handy for touch testing)
  build: { chunkSizeWarningLimit: 700 }, // three.js alone is ~500 kB minified (140 kB gzipped)
});
