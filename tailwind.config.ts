import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pringles-red': '#EA002A',
        'pringles-dark-red': '#cf102d',
        'pringles-gray': '#b3b3b3',
      },
      fontSize: {
        xxs: ['0.7rem', '1rem'],
      },
      screens: {
        xs: '400px',
      },
      backgroundImage: {
        'hero-texture': "url('/images/background.png')",
        'hero-texture-mobile': "url('/images/background-mobile.png')",
        'footer-texture': "url('/images/background-bottom.png')",
        'star-input': "url('/images/star.svg')",
        'gradient-radial':
          'radial-gradient(circle at center, rgba(207, 16, 45, 1) 0, rgba(207, 16, 45, 1) 5px, rgba(207, 16, 45, 0) 5px, rgba(207, 16, 45, 0) 100%)',
      },
      backgroundPosition: {
        'top-mobile': 'center top -80vw',
        'top-desktop': 'center top -42vw',
      },
      backgroundSize: {
        '100%': '100%',
      },
      clipPath: {
        dots: 'inset(0 100% 0 0)',
      },
      keyframes: {
        slidein: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'background-slidein': {
          '0%': { transform: 'translateY(-70%)' },
          '100%': { transform: 'translateY(0)' },
        },
        dots: {
          '0%': { 'clip-path': 'inset(0 100% 0 0)' },
          '100%': { 'clip-path': 'inset(0 -34% 0 0)' },
        },
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slidein: 'slidein 0.4s',
        'background-slidein': 'background-slidein 6s linear',
        dots: 'dots 1s steps(4) infinite',
        opacity: 'opacity 0.4s',
      },
    },
  },

  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/forms'),
    require('tailwind-clip-path'),
    require('autoprefixer'),
  ],
};
export default config;
