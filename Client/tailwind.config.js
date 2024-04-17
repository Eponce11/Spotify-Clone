/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'darkGrey': '#121212',
        'hoverDarkGrey': '#1a1a1a'
      }
    },
  },
  plugins: [],
}

