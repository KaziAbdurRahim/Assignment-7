/** @type {import('tailwindcss').Config} */


// import bg-image from 'import xxx from '../../../assets/logo.png'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bg-shadow.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

