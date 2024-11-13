/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image: "url(/7.jpg)",
      },
      colors: {
        "navy-blue": "#1A1A40",
      },
    },
  },
  plugins: [],
};
