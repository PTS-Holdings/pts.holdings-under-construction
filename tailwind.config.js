/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "2rem",
      },
      colors:{
        pts:{
          blue: "#253B63"
        }
      },
      fontFamily: {
        'inter':['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
