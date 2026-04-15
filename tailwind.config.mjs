/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0D6E6E',
          50:  '#E6F4F4',
          100: '#C2E2E2',
          200: '#8BCCCC',
          300: '#54B5B5',
          400: '#2D9494',
          500: '#0D6E6E',
          600: '#0A5858',
          700: '#084444',
          800: '#053030',
          900: '#031C1C',
        },
        gold: {
          DEFAULT: '#D4A843',
          50:  '#FDF6E3',
          100: '#F9E9B8',
          200: '#F0D080',
          300: '#E7B848',
          400: '#D4A843',
          500: '#B88C2E',
          600: '#9A7020',
          700: '#7A5618',
          800: '#5A3D0F',
          900: '#3A2508',
        },
        charcoal: '#1A1A2E',
        offwhite: '#F8F7F4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(13, 110, 110, 0.10)',
        'card-hover': '0 8px 32px rgba(13, 110, 110, 0.18)',
      },
    },
  },
  plugins: [],
};
