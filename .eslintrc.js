module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true},
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  plugins: ["vue"],
  parserOptions: {
    // NOTE! https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true},
  },
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
    "vue/no-v-html": "off"
  },
};
