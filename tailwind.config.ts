import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C5A44E",
          light: "#D4B96A",
          dark: "#A8893A",
        },
        dark: "#0A0A0A",
        "dark-soft": "#1A1A1A",
        "text-secondary": "#6B6B6B",
        "bg-light": "#F5F5F0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
