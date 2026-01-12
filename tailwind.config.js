
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        // Product Sans is proprietary; falling back to sans-serif if not available
        'product': ['Product Sans', 'Roboto', 'sans-serif'],
      },
      colors: {
        google: {
          blue: '#1a73e8',
          'blue-hover': '#1765cc',
          'blue-pale': '#e8f0fe',
          'blue-light': '#d2e3fc',
          red: '#ea4335',
          yellow: '#fbbc04',
          'yellow-pale': '#fef7e0',
          green: '#188038', 
          'green-light': '#e6f4ea',
          gray: {
            900: '#202124',
            800: '#3c4043',
            700: '#5f6368',
            100: '#f8f9fa',
            50: '#f1f3f4',
          }
        }
      },
      keyframes: {
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'spin-reverse-slower': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'fly-in-main': {
          '0%': { opacity: '0', transform: 'translate(-150%, 0%) scale(0.5)' },
          '20%': { opacity: '1', transform: 'translate(-120%, -10%) scale(1.2)' },
          '40%': { transform: 'translate(-120%, -10%) scale(1.1)' },
          '100%': { opacity: '0', transform: 'translate(20px, 80px) scale(0.2)' },
        },
        'fly-in-secondary': {
          '0%': { opacity: '0', transform: 'translate(150%, 50%) scale(0.5)' },
          '20%': { opacity: '1', transform: 'translate(120%, 20%) scale(1.2)' },
          '40%': { transform: 'translate(120%, 20%) scale(1.1)' },
          '100%': { opacity: '0', transform: 'translate(-50px, -50px) scale(0.2)' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-reverse-slower': 'spin-reverse-slower 50s linear infinite',
        'fly-in-main': 'fly-in-main 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fly-in-secondary': 'fly-in-secondary 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      }
    },
  },
  plugins: [],
}
