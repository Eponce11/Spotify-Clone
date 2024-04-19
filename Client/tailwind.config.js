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
        'hoverLightGrey': '#2E2C35',
        'lightGreen': '#1ED760',
        'txtGrey': '#bebebe'

      },
      fontSize: {
        'h1': ['96px', {
          lineHeight: '115%',
          letterSpacing: '-5px',
          fontWeight: '700',
        }],
        'h5': ['15px', {
          lineHeight: '110%',
          letterSpacing: '-1px',
          fontWeight: '500',
        }],
        'h6': ['14px', {
          lineHeight: '110%',
          letterSpacing: '-1px',
          fontWeight: '500',
        }],
      }
    },
  },
  plugins: [],
}

