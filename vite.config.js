import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".vue", ".json"],
  },

  server: {
    port: 8080,
    open: false,
  },

  build: {
    outDir: "dist",
    assetsDir: "static",
    sourcemap: true,
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name].[hash].js",
        entryFileNames: "static/js/[name].[hash].js",
        assetFileNames: "static/[ext]/[name].[hash].[ext]",
      },
    },
  },
});
