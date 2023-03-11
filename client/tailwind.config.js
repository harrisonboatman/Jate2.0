/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      scale: {
        '80': '.8'
      }
    },
  },
  plugins: [],
}