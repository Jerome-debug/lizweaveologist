const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js, jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: '540px',
        ...defaultTheme.screens,
      },
      colors: {
        body: "#17171F",
      },
    },
  },
  plugins: [],
};
