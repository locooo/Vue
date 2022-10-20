import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vetur from "@volar-plugins/vetur";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vetur()],
  server: { host: "0.0.0.0", port: 3000 },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         hack: `true; @import (reference) "${path.resolve(
  //           "src/assets/base.less"
  //         )}";`,
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
  css: {
    preprocessorOptions: {
      // less: {
      //   modifyVars: {
      //     hack: `true; @import (reference) "${path.resolve(
      //       "src/assets/base.less"
      //     )}";`,
      //   },
      //   javascriptEnabled: true,
      // },
      scss: {
        additionalData: `@use "src/pages/style/sass/groble-sass.module.scss" as *;@use "src/pages/style/sass/groble-sass.module.scss" as *;`,
      },
    },
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
