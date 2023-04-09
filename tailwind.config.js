/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['ubuntu', 'sans-serif'],
      'courier': ['courier', 'ubuntu', 'sans-serif'],
      'roboto-mono': ['roboto-mono', 'ubuntu', 'sans-serif'],
      'pacifico': ['pacifico','ubuntu', 'sans-serif'],
      'cookie': ['cookie','ubuntu', 'sans-serif'],
      'Shadows Into Light': ['shadows-into-light','ubuntu', 'sans-serif'],
      'dancing-script': ['dancing-script','ubuntu', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

