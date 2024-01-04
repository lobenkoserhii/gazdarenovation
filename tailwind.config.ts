/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'), // Добавьте этот плагин
    require('autoprefixer'),
  ],
  
  theme: {
     extend: {
 
    },
    colors: {
  'BGC': '#262626',
  'Yl': '#F4C300',
  'White': '#ffffff',
  'Black': '#000000',
  'DG': '#101010',
  'Light': '#2E2E2E',
    },

    fontFamily: {
      'SBE': ['Bebas Neue ExtraBold'],
      'SB': ['Bebas Neue'],
      'SR': ['Roboto', 'sans-serif'],
    },
    
    
    backgroundImage: {
      'HeroBG': "url('/gazda-app/public/Hero_bg.png')"
    
      
    },

    clipPath: {
      'triangle': 'polygon(0% 0%, 100% 0%, 100% 100%)',
      'circle': 'circle(50% at 50% 50%)',
    },

    screens: {
      'tablet': '640px',
      'NPC': '1024px',
      'PC': '1440px',
    },
    
    },
    maxWidth: {
      '10xl': '1440px',
    },

    

    
  }


