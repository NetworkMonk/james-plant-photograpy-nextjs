/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'sans': ['Tajawal', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
