/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1073px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "800px" },
      mdn: { max: "920px" },
      mdd: { max: "720px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "650px" },
      sma: { max: "420px" },
      smm: { max: "380px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      keyframes: {
        "trans-up": {
          "0% , 100%": { transform: "translateY(-16px)" },
          "50%": { transform: "translateY(0) " },
        },
      },
      animation: {
        "trans-up": "trans-up 1.9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
