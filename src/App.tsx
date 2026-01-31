import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { Segments } from "./components/Segments";
import { Platform } from "./components/Platform";
import { Pricing } from "./components/Pricing";
import { Founders } from "./components/Founders";
import { Academy } from "./components/Academy";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { CookieConsent } from "./components/CookieConsent";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-white bg-tech-grid text-monac-ink font-sans selection:bg-monac-blue selection:text-white overflow-x-hidden relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-monac-blue origin-left z-[60]"
        style={{ scaleX }}
      />
      <Navbar />
      {/* SEÇÕES COM IDs PARA NAVEGAÇÃO */}
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <PainPoints />
      </div>
      <div id="segments">
        <Segments />
      </div>
      <div id="platform">
        <Platform />
      </div>
      {/* Pricing e Founders já possuem ID interno, mas para garantir: */}
      <Pricing /> {/* Pricing.tsx tem id="pricing" na section */}
      <Founders /> {/* Founders.tsx tem id="about" na section */}
      <Academy /> {/* Academy.tsx tem id="academy" na section */}
      <CTA />
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
}

export default App;
