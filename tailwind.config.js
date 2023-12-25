/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005897",
        red_base: "#E50000",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("daisyui")],
};
