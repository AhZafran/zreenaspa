import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d4af37", // Elegant Gold
          light: "#e8c872",
          dark: "#b8941f",
        },
        background: {
          light: "#f6f8f7",
          dark: "#0d0d0d", // Rich Dark Background
        },
        surface: {
          light: "#ffffff",
          dark: "#1a1a1a", // Darker surface for contrast
        },
        text: {
          main: "#0e1b17",
          muted: "#d4d4d4", // Lighter text for dark backgrounds
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
