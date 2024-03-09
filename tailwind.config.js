/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink-20": "#ac478a",
        "pink-50": "#985b83",
        "pink-100": "#e60d9c",
        "pink-500": "#86085b",
"primary-100":"#ffffff ",
"primary-300":"#53cefb ",
"primary-500":"#3ac7fb",
"secondary-400":"#f0b2d2 ",
"secondary-500":"#c85992"
      },
      backgroundImage: (theme) => ({
        "gradient-pinkgreen": "linear-gradient(90deg, #c719b1 0%, #46a658 100% )",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
     screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
