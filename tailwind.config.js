/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {

      
      keyframes: {
        fade_in: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fade_out: {
          '100%': { opacity: 0 },
          '0%': { opacity: 1 },
        }
      },

      animation: {
        fade_in: 'fade_in 500ms forwards',
        fade_out: 'fade_out 500ms forwards',
      }

      

    },
  },
  plugins: [],
}
