/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6eeff',
          100: '#ccdfff',
          200: '#99bfff',
          300: '#669fff',
          400: '#337fff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        gold: {
          50: '#fff8e6',
          100: '#fff0cc',
          200: '#ffe099',
          300: '#ffd166',
          400: '#ffc133',
          500: '#ffb300',
          600: '#cc9000',
          700: '#996c00',
          800: '#664800',
          900: '#332400',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
      },
    },
  },
  plugins: [],
}