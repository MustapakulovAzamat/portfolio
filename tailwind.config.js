/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // screens: {
      //   'mobile': '426px',
      //   'tablet': '767px',
      //   'desktop': '1399px'
      // },
      fontSize: {
        'mobile': '25px',
        'tablet': '28px',
        'desktop': '40px'
      }
    },
  },
  plugins: [],
}
