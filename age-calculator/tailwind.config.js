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
      colors: {
        purple: "hsl(259,100%,65%)",
        "light-red": "hsl(0, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        "Off white": "hsl(0, 0%, 94%)",
        "Light grey": "hsl(0, 0%, 86%)",
        "Smokey grey": "hsl(0, 1%, 44%)",
        "Off black": "hsl(0, 0%, 8%)",
      },
      fontSize: {
        input: "2rem",
      },
    },
  },
  plugins: [],
};
