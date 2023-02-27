/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.4rem',
      base: '1rem',
      lg:'1.8rem',
      xl: '2rem',
      '2xl': '4rem',
      '3xl': '6rem',
      '4xl': '8rem',
      '5xl': '10rem',
    },
    extend: {}
  },
  plugins: [],
}