import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "@rollup/plugin-eslint";
import strip from "@rollup/plugin-strip";
import Markdown from 'unplugin-vue-markdown/vite'

export default defineConfig({
  // ---------------------------------------------------------------------------
  // SOMEDAY/MAYBE
  //   If we want a fully offline version (file:///path/to/index.html):
  //   - build with relative paths
  //   - disable code splitting for css & js (simplifies next step)
  //   - to avoid CORS, inline the css & js files in the index.html
  // ---------------------------------------------------------------------------
  base: "/diablo2-runewizard/",

  build: {
    // ---------------------------------------------------------------------------
    // Set this to `0` to prevent url encoding of smaller images
    // ---------------------------------------------------------------------------
    // assetsInlineLimit: 0,

    // ---------------------------------------------------------------------------
    // Extract all the app's styles into a single CSS file
    // ---------------------------------------------------------------------------
    cssCodeSplit: false,

    // ---------------------------------------------------------------------------
    // May be useful to turn this off when debugging, so you can read the output
    // ---------------------------------------------------------------------------
    minify: true,

    // ---------------------------------------------------------------------------
    // Rollup options
    // - force output of a single js chunk
    // ---------------------------------------------------------------------------
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },

    // ---------------------------------------------------------------------------
    // Note this outputs a big file in dist/ folder that is not required to run
    // ---------------------------------------------------------------------------
    // sourcemap: true,
  },

  resolve: {
    // ---------------------------------------------------------------------------
    // Set custom aliases for imports, see  https://vitejs.dev/config/#resolve-alias
    // ---------------------------------------------------------------------------
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "@styles",
        replacement: path.resolve(__dirname, "./src/assets/styles"),
      },
    ],
  },

  plugins: [
    // ---------------------------------------------------------------------------
    // @vitejs/plugin-vue
    // ---------------------------------------------------------------------------
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // ---------------------------------------------------------------------------
    // https://github.com/unplugin/unplugin-vue-markdown?tab=readme-ov-file#options
    // ---------------------------------------------------------------------------
    Markdown({ /* options */ }),

    // ---------------------------------------------------------------------------
    // @rollup/plugin-strip
    //   Removes all the console.assert/error/warn() from build
    //   https://github.com/rollup/plugins/tree/master/packages/strip
    // ---------------------------------------------------------------------------
    {
      ...strip({ include: "./src/**/*.(js|ts|vue)" }),
      apply: "build",
    },
  ],

  // ---------------------------------------------------------------------------
  // Server port, is used by `vite` but not `vite preview` for whatever reason
  // ---------------------------------------------------------------------------
  server: {
    port: 8080,
  },
});
