/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        background: "#141E22",
        background2: "#0F171A",
        card: "#1A262D",
        hover: "#202E36",
        text1: "#FFFFFF",
        text2: "#6b7280",
        border1: "#263640",
        primary: "#39D97C",
      },
    },
  },
  plugins: [],
};
