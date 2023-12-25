const loader = require("css-loader")
const { postcss } = require("tailwindcss")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["css-loader", "postcss-loader"],
}
