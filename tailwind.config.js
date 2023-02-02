/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "google-red": "#E33835",
      "google-blue": "#4580E8",
      "google-green": "#329C55",
      "google-orange": "#f9ab00",
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
      display: ["dark"],
    },
  },
  plugins: [
    require("tailwindcss"),
    require("flowbite/plugin"),
    require("daisyui"),
  ],
};
