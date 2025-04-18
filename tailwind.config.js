/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        title: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
