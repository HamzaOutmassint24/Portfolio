/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: "3px",
      sm: "13px",
      base: "1rem",
      lg: "1.625rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.6rem",
    },
    fontFamily: {
      "main-font" : "Playfair Display",
      "second-font": ["Public Sans", "sans-serif"],
    },
    letterSpacing: {
      normal: "1.5px",
      wide: "6.5px",
    },
    width: {
      sm: "9.5rem",
      md: "9.4rem",
      lg: "10.6rem",
      lg: "10.4rem",
      xl: "9.6rem",
      "50%":"50%",
    },
    colors: {
      "main-color": "#28E98C",
      "second-color": "#404042",
      "therd-color": "#bca9a9",
      "fourth-color": "#7f7272",
      "fifth-color": "#999999",
    },
    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
    },
    container: {
      padding: "5rem",
    },
    extend: {
      right: {
        "14.4rem": "14.4rem",
      },
    },
    screens: {
      sm: "359px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "exactly-1024": { min: "1024px", max: "1024px" },
    },
  },
  plugins: [],
};
