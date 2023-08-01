/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.{html, js, ts}'],
  theme: {
    extend: {
      colors: {
        custom: {
          '844cff': '#844cff',
          '864cff': '#864cff'
        }
      },
    },
  },
  plugins: [],
};
