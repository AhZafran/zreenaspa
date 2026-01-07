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
          DEFAULT: "#e1c16e", // Main Gold Color
          light: "#ebd89a",
          dark: "#c9ab52",
        },
        secondary: {
          DEFAULT: "#ffffff", // White
          light: "#ffffff",
          dark: "#f5f5f5",
        },
        background: {
          light: "#ffffff",
          dark: "#2D1B00", // Warm dark brown instead of black
        },
        surface: {
          light: "#ffffff",
          dark: "#3D2B12", // Warm brown surface
        },
        text: {
          main: "#000000", // Black for white backgrounds
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
