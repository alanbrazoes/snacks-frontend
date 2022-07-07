/** @type {import('tailwindcss').Config} */
const color = require('tailwindcss/colors');

module.exports = {
  content: ['./src/pages/**/*tsx', './src/components/**/*tsx'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Ubuntu', 'sans-serif'],
    },
    colors: {
      background: '#e1e1e6',
      text: '#020202',
      primary: '#a70b0b',
    },
    screens: {
      mm: '480px',
      sm: '640px',
      md: '900px',
      lg: '1224px',
      xl: '1480px',
    },
    extend: {
      colors: {
        error: color.red,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.primary'),
            },
            h3: {
              color: theme('colors.primary'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
