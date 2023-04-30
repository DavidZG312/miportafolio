/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'rgb-23-10-28': 'rgb(23, 10, 28)',
        'rgb-243-248-249': 'rgb(243, 248, 249)',
        'rgb-11-113-137': 'rgb(11, 113, 137)',
      },
    },
  },
  plugins: [],
}
