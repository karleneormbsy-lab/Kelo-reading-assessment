/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        cream: {
          50:  '#fffdf5',
          100: '#fef9e7',
          200: '#fdf0c2',
          300: '#fbe49a',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        accent: {
          yellow: '#fbbf24',
          green:  '#22c55e',
          red:    '#ef4444',
          purple: '#a855f7',
          orange: '#f97316',
        },
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cream-gradient': 'linear-gradient(135deg, #fef9e7 0%, #fdf0c2 50%, #fef9e7 100%)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'flip':        'flip 0.5s ease-in-out',
        'pop':         'pop 0.3s ease-out',
      },
      keyframes: {
        flip: {
          '0%':   { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        pop: {
          '0%':   { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)',   opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
