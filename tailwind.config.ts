import type { Config } from "tailwindcss";

/**
 * Calan design language, lifted from the current calan.com identity:
 * — deep corporate navy for ink, buttons and dark bands,
 * — the Calan brand blue for links, highlights and headings,
 * — the signature green square as the accent (eyebrows, markers, hovers),
 * — cold light-blue tints for section backgrounds.
 */
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EDF2F8",
          100: "#D9E4F0",
          200: "#B3C9E1",
          300: "#84A6CB",
          400: "#5580AF",
          500: "#33608F",
          600: "#234B75",
          700: "#1B3D63",
          800: "#16375C",
          900: "#102C4B",
          950: "#0A1F38",
        },
        blue: {
          50: "#EDF5FB",
          100: "#D8EAF7",
          200: "#B0D5EF",
          300: "#7FBBE4",
          400: "#4D9DD6",
          500: "#2B87CE",
          600: "#1B74BC",
          700: "#155E9C",
          800: "#124D80",
          900: "#0F3F69",
        },
        green: {
          50: "#F1F9EB",
          100: "#E1F2D5",
          200: "#C4E5AC",
          300: "#A3D67F",
          400: "#83C757",
          500: "#6CBF4B",
          600: "#4F9A2E",
          700: "#3F7E23",
          800: "#33651E",
        },
        mist: "#F4F8FB",
        cloud: "#E4EEF7",
        ink: {
          DEFAULT: "#122A42",
          soft: "#3D5470",
          faint: "#5E7490",
        },
      },
      fontFamily: {
        sans: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 44, 75, 0.06), 0 1px 3px rgba(16, 44, 75, 0.08)",
        "card-hover":
          "0 12px 32px -12px rgba(16, 44, 75, 0.22), 0 2px 6px rgba(16, 44, 75, 0.08)",
        panel: "0 32px 80px -32px rgba(10, 31, 56, 0.45)",
        header: "0 6px 24px -12px rgba(16, 44, 75, 0.18)",
      },
      maxWidth: {
        content: "76rem",
      },
      letterSpacing: {
        eyebrow: "0.16em",
      },
    },
  },
  plugins: [],
};

export default config;
