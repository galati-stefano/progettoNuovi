/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mulish : ['"mulish"' , ...defaultTheme.fontFamily.sans],
        poppins : ['"poppins"' , ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

