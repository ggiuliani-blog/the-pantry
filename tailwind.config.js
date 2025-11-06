/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#f3f8f3',
          100: '#e3f0e4',
          200: '#c6e2c9',
          300: '#9fceaa',
          400: '#72b383',
          500: '#4e9964',
          600: '#3c7a50',
          700: '#2f5f40',
          800: '#284d35',
          900: '#213f2c'
        }
      }
    }
  },
  plugins: [],
};

