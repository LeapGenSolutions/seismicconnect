/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#2563EB",   // Main blue (consistent across SEISMIC)
          600: "#1E4FDB",   // Hover / darker tone
        },
        accent: {
          500: "#0594FF",   // Brighter accent blue for CTAs or highlights
        },
        secondary: {
          500: "#171860",   // Deep navy background
        },
        cream: "#fff9f0",
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
}
