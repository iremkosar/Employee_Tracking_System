/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        manzara: "url('../src/assets/img/manzara.jpg')",
      },
    },
  },
  plugins: [],
};
