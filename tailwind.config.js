// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      // 🎨 COLORS
      colors: {
        bg: "#020617",
        surface: "#0B1120",
        card: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.1)",

        primary: "#3B82F6",
        secondary: "#8B5CF6",

        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          muted: "#64748B",
        }
      },

      // ✍️ TYPOGRAPHY
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1" }],
        h1: ["2.5rem", { lineHeight: "1.2" }],
        h2: ["2rem", { lineHeight: "1.3" }],
        h3: ["1.5rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },

      // 📏 SPACING
      spacing: {
        section: "5rem",
        container: "6rem",
      },

      // 🌟 SHADOWS
      boxShadow: {
        glow: "0 0 30px rgba(59, 130, 246, 0.3)",
        glowStrong: "0 0 40px rgba(59, 130, 246, 0.6)",
      },

      // 🎨 GRADIENT
      backgroundImage: {
        primaryGradient: "linear-gradient(to right, #3B82F6, #8B5CF6)",
      },

      // ✨ BORDER RADIUS
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },

      // ⚡ ANIMATIONS
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};