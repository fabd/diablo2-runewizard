module.exports = {
  extends: [
    "stylelint-config-standard",

    // note this already extends `stylelint-config-recommended`
    "stylelint-config-recommended-scss",

    // add this last! turns off all the rules that conflict with Prettier
    "stylelint-config-prettier",
  ],

  rules: {
    /////////////////////////////////////////////////////////////
    // stylelint
    /////////////////////////////////////////////////////////////
    "block-no-empty": null,

    // unnecessary warning that `#ffffff` should be `#fff` (css minification does this)
    "color-hex-length": null,

    // not helpful
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,

    // complains about `<style></style>` in Vue SFCs which doesn't get compiled anyway
    "no-empty-source": null,

    // allow duplicate properties *only* on consecutive lines (ie. fallbacks for old browsers)
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates"],
      },
    ],

    // if really needed, use `/* stylelint-disable-next-line declaration-no-important */`
    "declaration-no-important": true,

    /////////////////////////////////////////////////////////////
    // Control specificity
    /////////////////////////////////////////////////////////////
    "max-nesting-depth": [
      3,
      {
        // @media rules (and related mixins) that enclose a selector does not increase
        // nesting of that selector
        ignore: ["blockless-at-rules"],
      },
    ],

    // limit the number of type selectors (eg. html element) to... ONE
    "selector-max-type": [
      1,
      {
        // allow common pattern for spacing siblings in a list like a row of buttons
        //  (ie. `.CardFooter button + button`)
        ignore: ["next-sibling"],
      },
    ],

    // compounds are selectors separated by combinators (eg. `.Foo > child + sibling`)
    "selector-max-compound-selectors": 3,

    /////////////////////////////////////////////////////////////
    // selection from config standard / suggested additions
    //   https://github.com/stylelint/stylelint-config-standard#suggested-additions
    /////////////////////////////////////////////////////////////
    "function-url-quotes": "always",
    "selector-attribute-quotes": "always",

    /////////////////////////////////////////////////////////////
    // stylelint-scss
    /////////////////////////////////////////////////////////////

    // fix for tailwind/windicss
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["apply"],
      },
    ],

    // sass compiler ignores `&` in `.foo & .bar`, but useful to know
    "scss/selector-no-redundant-nesting-selector": true,
  },
};
