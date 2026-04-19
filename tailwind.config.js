/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js, ts, jsx, tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
        fontFamily: {
            prata: ['var(--font-prata)'],
            lato: ['var(--font-lato)'],
        }
    },
  },
  plugins: [],
}

