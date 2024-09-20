/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#17B16B",
      },
    },
  },
  plugins: [],
};
