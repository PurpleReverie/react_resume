/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', 'ui-sans-serif', 'system-ui'],
        // Add other font families if needed
      },
    },
  },
  plugins: [],
};
