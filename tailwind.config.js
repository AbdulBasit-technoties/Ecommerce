/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#161c2d',
        orange: '#f97316',
        gray: '#94a3b8',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Dm': ['DM Sans', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
}