module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '100px',
       },
       backgroundImage: theme => ({
        'starwarsbg': "url('/Users/siddhartha/Desktop/finalprojectbwdg/public/img/starwars.jpeg')",
       }),

       animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },

    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '10000': 10000,
      'auto': 'auto',
    }
    
  },
  variants: {
    extend: {},
    animation: ["motion-safe"]

  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
