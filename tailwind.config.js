/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      hyellow: '#FADE4B',
      hblue: '#AAD2DD',
      horange: '#DF7E2F',
      hred: '#D43E41',
      hgreen: '#8DBC86',
      hdark: '#383838',
      hlight: '#D9D9D9',
    },
    extend: {},
  },
  plugins: [],
};
