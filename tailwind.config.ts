import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:    '#fff5f9',
        blush:    '#fcd5e7',
        rose:     '#f9accc',
        blue:     '#4483c6',
        gold:     '#e3ba4e',
        plum:     '#2d1a2e',
        mauve:    '#9a6870',
        lavender: '#c2d8f4',
        peach:    '#fce8f4',
        coral:    '#4483c6',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        float:       'float 7s ease-in-out infinite',
        'float-slow':'floatSlow 10s ease-in-out infinite',
        shimmer:     'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':       { transform: 'translateY(-14px) rotate(1.5deg)' },
          '66%':       { transform: 'translateY(-7px) rotate(-1deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%':       { transform: 'translateY(-10px) scale(1.03)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.8' },
          '50%':       { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
