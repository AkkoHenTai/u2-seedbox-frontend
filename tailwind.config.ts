/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'future-sc': ['未来圆SC', 'sans-serif'], // 这里'future-sc'是自定义的名字
      },
    },
  },
  plugins: [],
}