module.exports = {
  parserOptions: {
    parser: "@typescript-eslint/parser", // allows ESLint to understand TypeScript syntax
  },
  plugins: ["prettier", "vue", "@typescript-eslint"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    // small set of rules which lint for well-known best-practices
    "eslint:recommended",
    // 'recommended' set of rules only from TypeScript-specific plugin (optional)
    "plugin:@typescript-eslint/recommended",
    //
    "plugin:compat/recommended",
    // parse Single File Components + Vue specific rules
    "plugin:vue/vue3-recommended",
    //
    "prettier",
  ],
  root: true,
  rules: {
    // console.* are removed by @rollup/plugin-strip
    "no-console": "off",

    // buggy with TS types, recommended off on TS projects (let TS do it)
    "no-undef": "off",
    "no-unused-vars": "off",

    //
    "prefer-const": "warn",

    //
    "vue/max-attributes-per-line": "off",
    "vue/no-unused-components": "warn",
    "vue/no-v-html": "off",
  },
};
