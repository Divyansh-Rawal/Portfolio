import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0e17",
        foreground: "#e8ecf5",
        muted: "#8a93a8",
        card: "#0f1524",
        border: "rgba(232,236,245,0.09)",
        accent: {
          teal: "#5eead4",
          indigo: "#818cf8",
          amber: "#f0a95c",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(100deg, #5eead4, #818cf8 60%, #f0a95c)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
