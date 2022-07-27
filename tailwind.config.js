/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#F8F9FE",
        primary: "#006FFD",
        colorTextSecond: "#71727A",
      },
    },
  },
  plugins: [],
};
