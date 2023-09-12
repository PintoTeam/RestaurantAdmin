import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
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
        primary: "#3d7ae6", //"#60f090",
        secondary: "#e14141",
        background: "#f6f5f7", // "#121212",
      },
    },
  },
  plugins: [],
};

export default config;
