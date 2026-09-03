/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7fe',
          100: '#e0effc',
          200: '#c1dffa',
          300: '#a1cff7',
          400: '#4b9ef5',
          500: '#2563eb',
          600: '#0d47a1',
          700: '#0d3a8f',
          800: '#0a2856',
          900: '#051830',
        },
        accent: {
          green: '#22a447',
          orange: '#ff8c42',
          yellow: '#ffc107',
          red: '#d32f2f',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
