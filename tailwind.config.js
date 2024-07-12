/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'rgb(79 70 229)',
      'primary-light': 'rgb(199 210 254)',
      'secondary': 'rgb(115 115 115)',
      'secondary-light': 'rgb(115 115 115)',
      'white': 'rgb(255 255 255)',
    },
    extend: {
      container:  {
          padding: {
            DEFAULT: '5rem',
            sm: '1rem',
          },
      }
    },
  },
  plugins: [],
}