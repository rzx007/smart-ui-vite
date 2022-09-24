import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        assetFileNames: `assets/[name].css`,
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "./src/entry.ts"),
      name: "SmartUI",
      fileName: "smart-ui",
      formats: ["es", "umd", "iife"],
    },
  },
});
