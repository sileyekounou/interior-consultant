/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lora': ['Lora', 'sans-serif'],
      },
      colors: {
        'color-bg': '#181719'
      },
      backgroundImage: {
        'decor': "url('/img/photo1.png')",
      }
    },
  },
  plugins: [],
}

