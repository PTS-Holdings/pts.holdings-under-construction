/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "3rem",
      },
      colors:{
        pts:{
          blue: "#253B63"
        }
      }
    },
  },
  plugins: [],
}
