import { scale } from 'svelte/transition';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        _bluelight: 'rgb(98, 182, 255)',
        _greenlight: 'rgb(98, 182, 255, 0.2)',
      },
      scale: {
        '103': '1.03'
      },
      spacing: {
        '88': '22rem'
      },
      backgroundImage: {
        'allpage': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/science.jpg')"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

