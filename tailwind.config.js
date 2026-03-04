/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Dark mode via classe no <html>
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Century Gothic'", "Futura", "'Trebuchet MS'", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
        mono: ["'Glacial Indifference'", "Outfit", "monospace"],
      },
      colors: {
        monac: {
          blue: "#0047BB",
          darkBlue: "#003388",
          ink: "#101820",
          paper: "#F2F0EB",
          gray: "#D4D4D8",
        },
      },
      backgroundImage: {
        "monac-gradient":
          "radial-gradient(circle at center, #0055ee 0%, #0047bb 60%, #003388 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-blue": "pulse-blue 2s ease-in-out infinite",
        "slide-in-up": "slideInUp 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fadeIn 0.5s ease both",
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-blue": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,71,187,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(0,71,187,0)" },
        },
        slideInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
