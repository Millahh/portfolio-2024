/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E661D9",
        secondary: "#A5489C",
        tertiary: "#454545",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        custom: "900px",
      },
      backgroundImage: {
        "custom": "url('../src/assets/bg.png')",
        "macbook": "url('../src/assets/projects/Macbook.png')",
      },
      letterSpacing: {
        widest: ".25em"
      }
    },
  },
  plugins: [],
};