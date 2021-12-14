const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts,scss}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "main-blue": "#575FCC",
      "light-blue": "#739EF1",
      orange: "#FF6D3B",
      "lighter-orange": "#FF6D3B",
      green: "#8FD8B5",
      yellow: "#FABF48",
      white: colors.white,
    },
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 1s ease",
        "fade-in": "fade-in 1s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
