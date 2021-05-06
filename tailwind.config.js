module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          500: '#04cd33',
        },
      },
      maxWidth: {
        'screen-lg': '1140px',
      },
      boxShadow: {
        '2xl-centered': '0 0px 50px -12px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        '5xl': '3rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
