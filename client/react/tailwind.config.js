/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,css}', // Include all relevant files
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'inter-var': ['"Inter var"', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      fontSize: {
        '10rem': '10rem',
        '6rem': '6rem',
      },
      lineHeight: {
        '11rem': '11rem',
        '7rem': '7rem',
      },
    },
  },
  plugins: [],
};