/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    extend: {
      width: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
      },
      maxWidth: {
        95: '95%',
        90: '90%',
        85: '85%',
        80: '80%',
        70: '70%',
        60: '60%',
        40: '40%',
      },
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
