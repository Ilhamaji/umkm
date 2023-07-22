/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        120: "40rem",
        110: "30rem",
      },
    },
  },
  plugins: [],
};
