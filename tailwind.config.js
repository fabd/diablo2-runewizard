module.exports = {
  mode: "jit",
  purge: [
    //
    "./index.html",
    //
    "./src/**/*.{js,jsx,ts,tsx,vue}",
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
        md: "1rem",
      },
    },
  },

  variants: {},
  plugins: [],
};
