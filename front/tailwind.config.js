/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#A5A582',
      secondary: '#F2994A',
      white: '#FFFFFF',
      black: '#2A2A2A',
      'brown-50': '#FFF8ED',
      'brown-100': '#FCF2E7',
      'brown-200': '#E7DDC9',
      'brown-300': '#E9BE8A',
      'brown-800': '#72421C',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
