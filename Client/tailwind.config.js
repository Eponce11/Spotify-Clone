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
        'secondaryBlack': '#17102D',
        'darkGrey': '#121212',
        'hoverDarkGrey': '#1a1a1a',
        'lightGreen': '#19E68C'
      }
    },
  },
  plugins: [],
}

