module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    // ESLint's builtin small set of rules which lint for well-known best-practices
    "eslint:recommended",
    // parse Single File Components + Vue specific rules ( https://eslint.vuejs.org/rules/ )
    "plugin:vue/vue3-recommended",
    //
    "prettier",
  ],
  plugins: ["vue"],
  parserOptions: {
    // NOTE! https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  rules: {
    // "prettier/prettier": "off",

    // configure terser or strip plugin to remove console.*
    "no-console": "off",

    "prefer-const": "warn",

    "vue/max-attributes-per-line": "off",
    "vue/no-unused-components": "warn",
    "vue/no-v-html": "off",

    // less noise / lower maintenance
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/no-empty-function": "off",
    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/no-non-null-assertion": "off",
    // "@typescript-eslint/no-unused-vars": "warn",

    // errors in provided shims-* files
    // "@typescript-eslint/ban-types": "off",
    // "@typescript-eslint/no-empty-interface": "off",
  },
};
