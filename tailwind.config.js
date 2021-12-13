module.exports = {
  prefix: '',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts,scss}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'main-blue': '#575FCC',
      'light-blue': '#739EF1',
      'orange': '#FF6D3B',
      'lighter-orange': '#FF6D3B',
      'green': '#8FD8B5',
      'yellow': '#FABF48',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};