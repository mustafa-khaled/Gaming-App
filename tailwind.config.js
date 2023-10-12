/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "#0e0b22",
        textColor: "#fff",
        secondary: "#0e0b22",
        purple: "#3a0563",
      },
    },
  },
  plugins: [],
};
