// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        gray: 'rgb(var(--color-gray) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      spacing: {
        'nav-top': 'var(--nav-height-mobile)',      // -> class h-nav-top
        'nav-bottom': 'var(--nav-height-bottom-mobile)', // desktop top nav if needed
      },
      fontSize: {
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        'content': '1200px',
      }
    },
  },
  plugins: [
   
  ],
}
