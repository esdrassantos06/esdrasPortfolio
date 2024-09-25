/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBg: '#e6e7e9',
        roxo: '#7d2ae8'
      },
      padding: {
        '10p': '10%',
      },
    },
  },
  plugins: [],
}
