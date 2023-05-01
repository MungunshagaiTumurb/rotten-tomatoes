module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FA320A",
        lightgrey: "#f3f3f3",
        lightdark: "rgba(0,0,0,0.4)",
      },
      borderRadius: {
        DEFAULT: "26px",
      },
    },
  },
  plugins: [],
};
