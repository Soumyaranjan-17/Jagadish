/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00b4d8',
        'cyber-purple': '#7209b7',
        'cyber-pink': '#f72585',
        'cyber-dark': '#0a192f',
        'cyber-darker': '#060f1d',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        cyber: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00b4d8' },
          '100%': { textShadow: '0 0 20px #00b4d8, 0 0 30px #00b4d8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      padding: {
        '32': '8rem',
      },
    },
  },
  plugins: [],
};