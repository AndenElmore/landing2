/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        dark: {
          DEFAULT: '#111111',
          deeper: '#080808',
          card: '#1A1A1A'
        }
      },
      backgroundColor: {
        'gradient-dark': 'linear-gradient(180deg, #080808 0%, #111111 100%)'
      }
    },
  },
  plugins: [],
};