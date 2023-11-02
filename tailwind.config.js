/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: "'Poppins', sans-serif",
        lobster: "'Lobster', sans-serif",
        roboto: "'Roboto Slab', serif",
        openSans: "'Open Sans', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

