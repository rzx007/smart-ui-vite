import { defineConfig } from "vitest/config";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

export default defineConfig({
  plugins: [
    vueJsx(),
    Unocss(),
  ],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  }
});
