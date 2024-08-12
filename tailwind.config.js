/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'card-bg': 'rgba(45, 45, 45, 0.4)',
      },
      backgroundImage: {
        'gradient-to-r-updates':
          'linear-gradient(to right, rgba(255, 0, 0, 0.12), rgba(0, 181, 208, 0.12))',
      },
      opacity: {
        40: '.40',
      },
    },
  },
  plugins: [],
};
