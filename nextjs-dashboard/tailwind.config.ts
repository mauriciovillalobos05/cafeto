import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          100: '#4980f6',
          200: '#0F1F2B',
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
          700: '#0A1A2B',
        },
        brown: {
          100: '#D2B48C',
          200: '#C69C6D',
          300: '#A67B5B',
          400: '#8B4513',
          500: '#A52A2A', 
          600: '#8B0000',
          700: '#5C4033',
          800: '#3B2F2F',
          900: '#D5D1C6',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
