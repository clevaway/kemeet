module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#FFFFFF',
          accent: '#CBCBCB'
        },
      },
      backgroundColor: {
        
      },
      borderColor: {
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
