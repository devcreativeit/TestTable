/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#FAFAFA',
        lightPrimary: '#1A73E8',
        lightError: "#D32F2F"
      },
    },
  },
  plugins: [],
};
