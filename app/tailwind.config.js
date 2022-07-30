const colors = require("tailwindcss/colors");

module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      color: {
        ...colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
