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

    extend: {
      fontSize: {
        // alias for `text-base`
        md: "1rem",
      },
    },
  },

  variants: {},
  plugins: [],
};
