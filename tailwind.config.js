/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      display: ["group-hover"],
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".font-common": {
          'font-family': 'Inter, Open Sans, sans-serif'
        },
      })
    })
  ],
}
