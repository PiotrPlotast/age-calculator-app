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
        lightRed: "hsl(0, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        OffWhite: "hsl(0, 0%, 94%)",
        LightGrey: "hsl(0, 0%, 86%)",
        SmokeyGrey: "hsl(0, 1%, 44%)",
        OffBlack: "hsl(0, 0%, 8%)",
      },
      fontSize: {
        input: "2rem",
      },
    },
  },
  plugins: [],
};
