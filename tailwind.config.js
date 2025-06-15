module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      yui: ['"Yuji Syuku"', '"serif"'],
      sans: ['"游ゴシック体"', '"YuGothic"', '"游ゴシック"', '"Yu Gothic"', '"Calibri"', '"sans-serif"'],
      caribri: ['"Calibri"', '"sans-serif"'],
    },
    extend: {
      textColor: {
        primary: "#288eba",
      },
      borderColor: {
        primary: "#288eba",
      },
      backgroundColor: {
        primary: "#288eba",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#717171",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
          },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: { extend: {} },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
