/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding:{
        DEFAULT: '14px',
        md:'36px',
        lg: '12px'
      },
      screens: {
        md: '768px',
        lg: '1296px',
      },
    },
    extend: {
      colors: {
        'brandBeige': '#FBF2F2',
        'brandRed': '#AA0601',
        'brandRedDark': '#650300',
        'brandGray': '#00000029',
        'brandGrayLight': '#DEE2E6',
        'brandGrayDark': '#707070',
        'productBrownDark': '#5F3E2D',
        'productBrown': '#B75929'
      },
      backgroundImage: {
        'homeLogo': "url('/img/logo-white.png')",
        'banner': "url('/img/home-header.png')",
        'bannerSm': "url('/img/home-header-sm.png')",
        'collab': "url('/img/index-bg-md.png')",
        'collabSm': "url('/img/index-bg-sm.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

