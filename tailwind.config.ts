import type { Config } from "tailwindcss";

/**
 * Calan design language — "leading firm" register.
 * Colors are lifted from the current calan.com identity: corporate navy ink,
 * the Calan brand blue, the signature green square as a sharp accent, and
 * cold light-blue tints. The premium register comes from typography
 * (editorial serif display), hairline rules, squared corners and photography
 * — not from gradients or rounded cards.
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
        paper: "#F7F9FB",
        mist: "#F4F8FB",
        cloud: "#E4EEF7",
        ink: {
          DEFAULT: "#122A42",
          soft: "#3D5470",
          faint: "#5E7490",
        },
      },
      borderColor: {
        rule: "rgba(16, 44, 75, 0.15)",
        "rule-dark": "rgba(255, 255, 255, 0.16)",
      },
      fontFamily: {
        sans: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
        display: [
          "'Source Serif 4 Variable'",
          "'Source Serif 4'",
          "Georgia",
          "serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 44, 75, 0.05)",
        panel: "0 24px 64px -32px rgba(10, 31, 56, 0.4)",
      },
      maxWidth: {
        content: "80rem",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
