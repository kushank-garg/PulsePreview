/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [],
}