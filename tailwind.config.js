/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    }
  },
  plugins: [
    require("tailwindcss"),
    require("flowbite/plugin"),
    require("daisyui"),
  ],
};
