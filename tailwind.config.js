/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Work Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
