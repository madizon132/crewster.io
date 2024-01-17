module.exports = {
  content: ['*.html/','./src/js/*.js',
    './docs/*.html'],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      colors: {
        colorWhite: {
          clean: '#ffffff',
          dirty: '#f1f1f1',
        },
        darkCyan: '#1D7874',
        trailDust: '#d0c3ac',
        black: '#1d1d1d',
      }
    },
    fontFamily: {
      sans: ['Roboto Slab', 'serif']
    },
  },
  variants: {
    extend: {
       backgroundOpacity: ['dark']
    }
  },
  plugins: [],
}