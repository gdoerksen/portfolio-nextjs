/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1E1E1E",
        light: "#F5F5F5",
        primary: "#FFC107",
        primaryDark: "#FFA000",
        // light: 'var(--color-light)',
        // dark: 'var(--color-dark)',
        // primary: 'var(--color-primary)',
        // primaryDark: 'var(--color-primary-dark)',
    },
  },
},
  plugins: [],
}
