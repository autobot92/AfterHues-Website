import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#85000F",
          50: "#FDF5F6",
          100: "#FBECEE",
          200: "#F6D0D5",
          300: "#ECA3AB",
          400: "#DE6C7A",
          500: "#C7384A",
          600: "#A31426",
          700: "#85000F",
          800: "#69000C",
          900: "#4D0009",
          950: "#2E0005",
        },
        ivory: {
          DEFAULT: "#F7F3ED",
          50: "#FDFAF7",
          100: "#F7F3ED",
          200: "#EFE7DA",
          300: "#E3D5C0",
          400: "#D3BEA1",
        },
        champagne: {
          DEFAULT: "#B99B7A",
          100: "#F2ECE5",
          200: "#E3D6C8",
          300: "#D2BEA9",
          400: "#C6AB8F",
          500: "#B99B7A",
          600: "#A0805E",
          700: "#836749",
          800: "#675138",
        },
        ink: {
          DEFAULT: "#1F1617",
          muted: "#5E5254",
          subtle: "#8A7D80",
          border: "#E7DFD5",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
