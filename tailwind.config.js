/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        press: ['"Press Start 2P"', 'monospace', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'retro-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'retro': '4px 4px 0px 0px rgba(0,0,0,1)',
        'retro-lg': '6px 6px 0px 0px rgba(0,0,0,1)',
        'retro-glow-purple': '0 0 10px rgba(147, 51, 234, 0.6), 4px 4px 0px 0px rgba(0,0,0,1)',
        'retro-glow-cyan': '0 0 10px rgba(6, 182, 212, 0.6), 4px 4px 0px 0px rgba(0,0,0,1)',
        'retro-light-sm': '2px 2px 0px 0px rgba(156, 163, 175, 0.5)',
        'retro-light': '4px 4px 0px 0px rgba(156, 163, 175, 0.5)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'crt-flicker': 'crt-flicker 0.15s infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        },
        'crt-flicker': {
          '0%': { opacity: 0.99 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.99 },
        }
      }
    },
  },
  plugins: [],
}
