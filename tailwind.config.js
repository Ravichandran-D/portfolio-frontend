/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clrPrimary: "rgb(8, 19, 31)",
        clrPrimaryLight: "rgb(8, 19, 31, 0.5)",
        clrAccentLight: "rgb(221, 82, 69, 0.7)",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
}