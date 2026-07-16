/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070E1C",
          900: "#0A1628",
          800: "#0D1B3E",
          700: "#132247",
        },
        cobalt: {
          400: "#4C8DFF",
          500: "#2979FF",
          600: "#1E6FFF",
        },
        clarity: {
          50: "#F6F8FB",
          100: "#EEF2F7",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(10, 22, 40, 0.15)",
        cardHover: "0 24px 60px -16px rgba(30, 111, 255, 0.28)",
        glow: "0 0 40px rgba(41, 121, 255, 0.35)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(41,121,255,0.45)" },
          "50%": { boxShadow: "0 0 0 14px rgba(41,121,255,0)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
