/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Century Gothic substituto via Google Fonts (Nunito para headings bold)
        heading: ["'Century Gothic'", "Futura", "'Trebuchet MS'", "sans-serif"],
        // Poppins para subtítulos e corpo de texto
        sans: ["Poppins", "sans-serif"],
        // Glacial Indifference substituído por Outfit (similar geometric) para números
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
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
        "monac-gradient":
          "radial-gradient(circle at center, #0055ee 0%, #0047bb 60%, #003388 100%)",
      },
      animation: {
        check: "check 0.5s ease-in-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "border-beam": "borderBeam 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        check: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "80%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        borderBeam: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      letterSpacing: {
        widest: "0.2em",
        "extra-wide": "0.3em",
      },
    },
  },
  plugins: [],
};
