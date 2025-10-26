/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',
        surface: '#0b1220',
        bg: '#071827'
      },
      borderRadius: {
        DEFAULT: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
