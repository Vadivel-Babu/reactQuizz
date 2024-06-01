/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ring: "url('/ring.png')",
      },
    },
    colors: {
      purple: "#A729F5",
      green: "#26D782",
      red: "#EE5454",
      navy: "#3B4D66",
      bluish: "#ABC1E1",
      darkNavy: "#313E51",
      greyish: "#F4F6FA",
      grayNavy: "#626C7F",
      white: "#ffff",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
