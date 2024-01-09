/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        forward: {
          '0%': { marginLeft: '1rem' },
          '100%': { marginLeft: '2rem' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite',
        forward: 'forward 0.5s infinite alternate',
      },
    },
  },
  plugins: [],
};
