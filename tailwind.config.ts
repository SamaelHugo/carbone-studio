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
        bg: {
          primary: "var(--bg-primary)",
          card: "var(--bg-card)",
          elevated: "var(--bg-elevated)",
          hover: "var(--bg-hover)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          disabled: "var(--text-disabled)",
        },
        accent: {
          copper: "var(--accent-copper)",
          "copper-hover": "var(--accent-copper-hover)",
          red: "var(--accent-red)",
          "red-hover": "var(--accent-red-hover)",
        },
        border: {
          subtle: "var(--border-subtle)",
          medium: "var(--border-medium)",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      transitionTimingFunction: {
        monopo: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      animation: {
        "line-grow": "lineGrow 1s cubic-bezier(0.76, 0, 0.24, 1) forwards",
      },
      keyframes: {
        lineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
