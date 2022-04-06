module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ["SF Pro Display", "san-serif"],
      },
      colors: {
        medgray: "#aaaaaa",
        darkgray: "#313132",
        lightgray: "#f3f3f6",
        green: "#3b9f50",
        lighttext: "#9d9d9c",
        mediumtext: "#706f6f",
        silver: "#f0f1ec",
        gold: "#f9e8d3",
        alpinegreen: "#4d5d4c",
        graphite: "#514f4d",
        sierrablue: "#514f4d",
        blueselector: "#0066cc",
      },
    },
  },
  plugins: [],
};
