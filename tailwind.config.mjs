/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#edf7f7',
          100: '#d0ecec',
          200: '#a4d8d8',
          300: '#70c0c0',
          400: '#3fa8a8',
          500: '#1a8f8f',
          600: '#0D6E6E',
          700: '#0a5959',
          800: '#084444',
          900: '#052e2e',
        },
        gold: {
          50:  '#fdf8ec',
          100: '#f9eece',
          200: '#f3db9a',
          300: '#ecc460',
          400: '#D4A843',
          500: '#c0912a',
          600: '#a07520',
          700: '#7d5a18',
          800: '#5c4111',
          900: '#3b290a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
