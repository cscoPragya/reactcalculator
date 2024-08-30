/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // For Google Fonts
        custom: ['CustomFont', 'Arial', 'sans-serif'], // For Custom Font
      },
      boxShadow: {
        'custom-light': '4px 4px 1px -3px rgba(255, 255, 255, 0.5), -4px -4px 1px -3px rgba(255, 255, 255, 0.5)',
        'custom-dark': '0 10px 15px -2px rgba(0, 0, 0, 0.5)',
        'custom-dual': '0 -4px 4px -2px rgba(255, 255, 255, 0.5), 0 4px 6px -1px rgba(0, 0, 0, 0.7)',
        'custom-pink':'0 4px 6px rgba(219, 39, 119, 0.5)',
        'custom-dark-pink': '0 4px 6px rgba(219, 39, 119, 0.5), 0 -4px 6px rgba(219, 39, 119, 0.5), 4px 0 6px rgba(219, 39, 119, 0.5), -4px 0 6px rgba(219, 39, 119, 0.5)',
        'custom-white': '0 4px 6px rgba(255, 255, 255, 0.5), 0 -4px 6px rgba(255, 255, 255, 0.5), 4px 0 6px rgba(255, 255, 255, 0.5), -4px 0 6px rgba(255, 255, 255, 0.5)',
        'custom-black': '0 4px 6px rgba(0, 0, 0, 0.5), 0 -4px 6px rgba(0, 0, 0, 0.5), 4px 0 6px rgba(0, 0, 0, 0.5), -4px 0 6px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}