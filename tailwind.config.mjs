/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0D6E6E',
          50:  '#E6F4F4',
          100: '#C2E3E3',
          200: '#9AD1D1',
          300: '#70BFBF',
          400: '#47ACAC',
          500: '#0D6E6E',
          600: '#0B5E5E',
          700: '#094E4E',
          800: '#073E3E',
          900: '#052E2E',
        },
        gold: {
          DEFAULT: '#D4A843',
          50:  '#FBF5E6',
          100: '#F5E7BF',
          200: '#EDD794',
          300: '#E5C769',
          400: '#DDB84E',
          500: '#D4A843',
          600: '#B88E35',
          700: '#9C7428',
          800: '#7F5A1B',
          900: '#63400E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
