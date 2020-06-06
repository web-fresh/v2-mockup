module.exports = {
  purge: [
    "./index.html",
  ],
  theme: {
    screens: {
      'xs': '455px',
      // => @media (min-width: 350px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "dark-lime": "#25B023",
        "light-lime": "#79E476",
        "dark-gray": "#313131",
      },
    },
  },
  variants: {},
  plugins: [],
}