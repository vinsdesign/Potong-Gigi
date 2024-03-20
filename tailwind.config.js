/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      screens: {
        xxsm: '320px',
        // => @media (min-width: 320px) { ... }
        xsm: '370px',
        // => @media (min-width: 370px) { ... }
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px'
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ImperialScript: ['"Imperial Script", "cursive"']
      },
      colors: {
        primary: '#99762C',
        secondary: '#F7F6F4'
      }
    }
  },
  plugins: []
}
