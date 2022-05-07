module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8256e6',
        }
      },
      borderRadius: {
        md: '4px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
