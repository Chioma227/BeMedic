/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      green:{
        '100': "#13bfb1"
      }
     },
    },
  },
  plugins: [],
}