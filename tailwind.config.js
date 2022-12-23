/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    "*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('flowbite/plugin'),
    require("daisyui"),
  ],
}
