/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'card-bg': 'rgba(45, 45, 45, 0.4)',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%', // full width for small screens
          md: '100%', // full width for medium screens
          lg: '1024px', // custom width for large screens
          xl: '1280px', // custom width for extra-large screens
          '2xl': '1536px', // custom width for 2xl screens
        },
      },

      backgroundImage: {
        'gradient-to-r-updates':
          'linear-gradient(to right, rgba(255, 0, 0, 0.12), rgba(0, 181, 208, 0.12))',
        'gradient-to-r-square':
          'linear-gradient(180deg, rgba(59, 54, 86, 1) 0%, rgba(39, 63, 101, 1) 50%, rgba(21, 73, 116, 1) 100%)',
      },
      opacity: {
        40: '.40',
      },
    },
  },
  plugins: [],
};
