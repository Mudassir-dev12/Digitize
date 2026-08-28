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
        background: "#0A0A0A",
        surface: {
          50: "#18181B",
          100: "#141418",
          200: "#0E0E12",
          300: "#0A0A0A",
        },
        brand: {
          blue: "#2563EB",
          cobalt: "#1D4ED8",
          royal: "#1E40AF",
          sky: "#3B82F6",
          light: "#60A5FA",
          indigo: "#1D4ED8",
          violet: "#1E40AF",
          purple: "#4F46E5",
          cyan: "#38BDF8",
          emerald: "#10B981",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(37, 99, 235, 0.35)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jet-mono)", "monospace"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite alternate",
        "float-slow": "float 6s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(32px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "tech-radial": "radial-gradient(circle at 50% 30%, rgba(37, 99, 235, 0.18), transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
