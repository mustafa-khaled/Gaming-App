/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "#191523",
        textColor: "#fff",
        secondary: "#0e0b22",
      },
    },
  },
  plugins: [],
};
