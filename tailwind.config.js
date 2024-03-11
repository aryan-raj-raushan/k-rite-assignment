/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "370px",
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1360px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
