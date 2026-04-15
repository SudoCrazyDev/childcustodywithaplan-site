/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#0D6E6E',
          light: '#0F8080',
          dark: '#095555',
          50: '#f0fafa',
          100: '#d0f0f0',
          200: '#a0e0e0',
          600: '#0F8080',
          700: '#0D6E6E',
          800: '#095555',
          900: '#063d3d',
        },
        gold: {
          primary: '#D4A843',
          light: '#DFB85C',
          dark: '#B8902E',
          400: '#DFB85C',
          500: '#D4A843',
          600: '#B8902E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
};
