import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "@rollup/plugin-eslint";
import markdown from "vite-plugin-md";
import strip from "@rollup/plugin-strip";

export default defineConfig({
  // ---------------------------------------------------------------------------
  // SOMEDAY/MAYBE
  //   If we want to be able to drag-drop the index.html into a browser:
  //   - build with relative paths
  //   - build js into a single chunk ...
  //   - ... to avoid CORS inline the js chunk into the index.html
  // ---------------------------------------------------------------------------
  // base: "./",

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
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  plugins: [
    // ---------------------------------------------------------------------------
    // @vitejs/plugin-vue
    // ---------------------------------------------------------------------------
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // ---------------------------------------------------------------------------
    // vite-plugin-md
    //   https://github.com/antfu/vite-plugin-md
    // ---------------------------------------------------------------------------
    markdown(),

    // ---------------------------------------------------------------------------
    // @rollup/plugin-eslint
    //   Run eslint, but only on build (also configure ESLint extension in VSCode)
    // ---------------------------------------------------------------------------
    {
      ...eslint({
        include: "./src/**/*.(vue|js|jsx|ts|tsx)",
      }),
      enforce: "pre",
      apply: "build",
    },

    // ---------------------------------------------------------------------------
    // @rollup/plugin-strip
    //   Removes all the console.assert/error/warn() from build
    //   https://github.com/rollup/plugins/tree/master/packages/strip
    // ---------------------------------------------------------------------------
    {
      ...strip({ include: "./src/**/*.(js|ts)" }),
      apply: "build",
    },
  ],

  server: {
    port: 8080,
  },
});
