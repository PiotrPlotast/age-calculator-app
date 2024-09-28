/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["poppins regular", "sans-serif"],
        poppinsItalic: ["poppins italic", "sans-serif"],
        poppinsBold: ["poppins bold", "sans-serif"],
        poppinsBoldItalic: ["poppins bold italic", "sans-serif"],
        poppinsExtraBold: ["poppins extra bold", "sans-serif"],
        poppinsExtraBoldItalic: ["poppins extra bold italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
