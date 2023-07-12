/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      standard: {
        DEFAULT: '#414ACB',
        darker: '#1E28B8',
        accent: '#B79620'
      },
      vip: {
        DEFAULT: '#D4B95A',
        darker: '#B79620',
        accent: '#1E28B8',
      }
    },
    fontFamily: {
      'display': ['Caveat', 'sans-serif'],
      'body': ["'DM Sans'", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

