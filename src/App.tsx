import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { CookieConsent } from "./components/CookieConsent";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { PainPoints } from "./components/PainPoints";
import { Comparison } from "./components/Comparison";
import { Segments } from "./components/Segments";
import { Platform } from "./components/Platform";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Founders } from "./components/Founders";
import { Academy } from "./components/Academy";
import { CTA } from "./components/CTA";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-monac-ink text-monac-ink dark:text-white bg-tech-grid font-sans selection:bg-monac-blue selection:text-white overflow-x-hidden relative transition-colors duration-300">
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-monac-blue origin-left z-[60]"
          style={{ scaleX }}
          aria-hidden="true"
        />

        <Navbar />

        <main className="pt-24 lg:pt-28">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Stats />
                  <PainPoints />
                  <Comparison />

                  {/* Seções restauradas: Visíveis no Desktop, ocultas no Mobile */}
                  <div className="hidden lg:block">
                    <Segments />
                    <Platform />
                    <Pricing />
                  </div>

                  <Testimonials />

                  {/* Seções restauradas: Visíveis no Desktop, ocultas no Mobile */}
                  <div className="hidden lg:block">
                    <Founders />
                    <Academy />
                  </div>

                  <CTA />
                </>
              }
            />
            <Route path="/plataforma" element={<Platform />} />
            <Route path="/solucoes" element={<Segments />} />
            <Route path="/planos" element={<Pricing />} />
            <Route
              path="/quem-somos"
              element={
                <>
                  <Founders />
                  <Academy />
                </>
              }
            />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
