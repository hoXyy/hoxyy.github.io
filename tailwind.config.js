module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
