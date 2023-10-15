// Import the TailwindCSS type definitions
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // PurgeCSS will scan these paths for class names to keep
  ],
  theme: {
    extend: { // Extending the default theme
      fontFamily: { // Adding custom fonts
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [], // No plugins are being used currently
}
