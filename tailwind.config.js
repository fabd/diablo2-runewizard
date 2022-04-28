module.exports = {
  content: [
    //
    "./index.html",
    //
    "./src/**/*.{js,md,ts,vue}",
  ],

  theme: {
    colors: {
      gold: {
        light: "#BAB197",
        DEFAULT: "#8A8062",
      },
    },

    // redeclare to remove the baked-in line-height, and add `md` alias
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem",
      lg: "1.125rem", // 18px

      // alias for `text-base`
      md: "1rem", // 16px
    },

    extend: {
      fontSize: {
        // alias for `text-base`
        md: "1rem",
      },

      lineHeight: {
        1: 1, // alias for `leading-none`
      },
    },
  },

  variants: {},
  plugins: [],
};
