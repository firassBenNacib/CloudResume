/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js", "./node_modules/daisyui/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
