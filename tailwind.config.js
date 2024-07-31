/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        manzara: "url('../src/assets/img/manzara.jpg')",
        bg: "url('../src/assets/img/bg.jpg')",
      },
      fontSize: {
        size18: "18px",
      },
      colors: {
        purple: "#555487",
      },
    },
  },
  plugins: [],
};
