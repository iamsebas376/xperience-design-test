/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'background': '#FFFFFF',
        'background-2': '#F2F4F7',
        'primary': '#101828',
        'secondary': '#344054',
        'gray-1': '#667085',
        'gray-2': '#D0D5DD',
        'gray-3': '#98A2B3',
        'purple-1': '#7F56D9',
        'purple-2': '#d9c2f9',
        'green-1': '#079455',
        'green-2': '#4ade80',
      },
    },
  },
  plugins: [],
}
