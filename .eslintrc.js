module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["vue", "@typescript-eslint"],
  extends: [
    // ESLint's builtin small set of rules which lint for well-known best-practices
    "eslint:recommended",
    // TypeScript's own "recommended" rules
    "plugin:@typescript-eslint/recommended",
    // lint the browser compatibility (cf. "browserslist" in package.json)
    "plugin:compat/recommended",
    // parse Single File Components + Vue specific rules ( https://eslint.vuejs.org/rules/ )
    "plugin:vue/vue3-recommended",
    //
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    "prettier/prettier": "off",

    // don't need, let terser or strip plugin remove console.*
    "no-console": "off",

    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",

    // less noise / lower maintenance
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-empty-function": "off",

    // errors in provided shims-* files
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
};
