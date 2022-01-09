module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "farmcity-primary": "#313639",
        "spicy-mix": "#8A584C",
        "cadet-grey": "#8FA6AC",
        champagne: "#F5EACF",
        tan: "#e6dac8", //  "#CEB793", changed color for a11y to add contrast
        shadow: "#85865F",
        "olive-drab-camouflage": "#4F583D",
      },
      backgroundImage: {
        "hero-image": "url('/img/bg-image.jpg')",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
