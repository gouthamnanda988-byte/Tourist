/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050B14',
          900: '#0A1628',
          850: '#0F2038',
          800: '#162C4B',
          700: '#1F3C66',
          600: '#2B5187',
          500: '#3A6BAE',
          100: '#E2EAF4',
          50: '#F0F5FA',
        },
        brand: {
          red: '#DC2626',
          amber: '#D97706',
          navy: '#0A1628',
          blue: '#0284C7',
          lightBlue: '#E0F2FE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
