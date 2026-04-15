/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0fafa',
          100: '#d0f0f0',
          200: '#a0e0e0',
          300: '#60c8c8',
          400: '#2aacac',
          500: '#0D6E6E',
          600: '#0a5a5a',
          700: '#084848',
          800: '#063636',
          900: '#042424',
        },
        gold: {
          50:  '#fdf9ee',
          100: '#f9efcc',
          200: '#f2db90',
          300: '#ebc654',
          400: '#D4A843',
          500: '#c49430',
          600: '#a67a22',
          700: '#855e18',
          800: '#644410',
          900: '#432c08',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
