/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2C3D50',
        'secondry-color': '#1ABC9C'
      },
      spacing: {
        'section-padding': '5rem',
        'section-padding-nav':'13rem'
      }
    },
  },
  plugins: [],
}

