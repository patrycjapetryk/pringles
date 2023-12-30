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
      screens: {
        xs: '400px',
      },
      backgroundImage: {
        'hero-texture': "url('/images/background.png')",
        'hero-texture-mobile': "url('/images/background-mobile.png')",
        'footer-texture': "url('/images/background-bottom.png')",
      },
      backgroundPosition: {
        'top-1': 'center top -11rem',
        'top-2': 'center top -18rem',
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
        slidein: 'slidein 0.8s cubic-bezier(.44,.32,.92,.45)',
      },
    },
  },
  plugins: [],
};
export default config;
