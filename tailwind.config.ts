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
        'pringles-dark-red': '#CF102D',
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
      },
      backgroundPosition: {
        'top-1': 'center top -11rem',
        'top-2': 'center top -18rem',
        'right-top-5': 'right 5px top 6px',
      },
      backgroundSize: {
        '100%': '100%',
      },
      keyframes: {
        slidein: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slidein: 'slidein 0.4s',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
export default config;
