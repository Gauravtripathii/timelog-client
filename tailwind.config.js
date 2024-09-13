/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['"Archivo Black"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        "3xl": "0 0 50px black"
      }
    },
  },
  plugins: [],
}