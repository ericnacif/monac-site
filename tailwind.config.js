/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        atlas: {
          blue: "#0047BB", // Pantone 2728 C (Azul Real)
          ink: "#101820", // Preto Carvão (Texto)
          paper: "#F2F0EB", // Pantone 11-0602 (Off-White Base)
          gray: "#d4d4d8", // Cinza para detalhes sutis
        },
      },
      backgroundImage: {
        // Textura de "Noise" (Ruído) via SVG embutido
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
