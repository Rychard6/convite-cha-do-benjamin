import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F8F7F3",
          dark: "#F1EEE6",
        },
        green: {
          main: "#8CA882",
          light: "#DCE9D7",
          dark: "#6E8766",
        },
        gold: {
          DEFAULT: "#D4AF7C",
          light: "#E6CFA7",
        },
        brown: {
          DEFAULT: "#8B6F47",
          dark: "#6B5536",
        },
      },
      fontFamily: {
        script: ["var(--font-script)"],
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(139, 111, 71, 0.25)",
        card: "0 8px 24px -8px rgba(139, 111, 71, 0.2)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(-2deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        drift: {
          "0%": { transform: "translateX(-6%)" },
          "50%": { transform: "translateX(6%)" },
          "100%": { transform: "translateX(-6%)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1.5s infinite",
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "drift 26s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease-out both",
        "fade-in-scale": "fade-in-scale 0.6s ease-out both",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        sway: "sway 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
