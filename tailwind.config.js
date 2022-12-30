/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("flowbite/plugin"),
    require("daisyui"),
  ],
};
