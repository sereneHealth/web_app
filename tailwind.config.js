/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#1fad92",
        "deep-black": "#111111",
        "black-md": "#1A202C",
      },
      boxShadow: {
        'custom': '0px 16px 32px 0px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}

