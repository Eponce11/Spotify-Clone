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
        'lightGrey': '#242424',
        'secondaryLightGrey': '#181818',
        'tertiaryLightGrey': '#8f8f8f',
        'fourthLightGrey': "#4b4b4b",
        'hoverDarkGrey': '#1a1a1a',
        'hoverLightGrey': '#282828',
        'lightGreen': '#1ED760',
        'txtGrey': '#bebebe'

      },
      fontSize: {
        'h1': ['96px', {
          lineHeight: '115%',
          letterSpacing: '-5px',
          fontWeight: '700',
        }],
        'h3': ['32px', {
          lineHeight: '115%',
          letterSpacing: '-1px',
          fontWeight: '600',
        }],
        'h4': ['22px', {
          lineHeight: '115%',
          letterSpacing: '-1px',
          fontWeight: '600',
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

