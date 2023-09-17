import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/index.js"),
    },
    // emit manifest so PHP can find the hashed files
    manifest: true,
    outDir: "../dist",
    cssMinify: true,
    minify: true,
    cssCodeSplit: true,
  },
  server: {
    // we need a strict port to match on PHP side
    // change freely, but update on PHP to match the same port
    // tip: choose a different port per project to run them at the same time
    strictPort: true,
    port: 4000,
  },
});
