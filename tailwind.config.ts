import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.5rem",
        sm: "0.75rem",
        reg: "0.875rem",
        md: "1.25rem",
        lg: "1.50rem",
        xl: "1.75rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
        "5xl": "3.5rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      colors: {
        primary: {
          100: "#FEFFA3",
          200: "#FDFE66",
          300: "#FCFD29",
          400: "#FBFC0C",
          500: "#E4F241",
          600: "#C8CA32",
          700: "#ACAC24",
          800: "#909116",
          900: "#747508",
        }, //"#60f090",
        secondary: {
          100: "#D5C7FF",
          200: "#BAAEFF",
          300: "#9E91FF",
          400: "#8365FF",
          500: "#804CE4",
          600: "#683ABD",
          700: "#4F2996",
          800: "#36176E",
          900: "#1D0551",
        },
        "background-light": "#F9F9F9", // "#121212",
        "background-dark": "#0A0314", // "#121212",
      },
    },
  },
  plugins: [],
};

export default config;
