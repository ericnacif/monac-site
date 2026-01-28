import { Navbar } from "./components/Navbar";
import { GeometricArt } from "./components/GeometricArt";
import { Infrastructure } from "./components/Infrastructure";
import { StatsBar } from "./components/StatsBar";
import { Segments } from "./components/Segments";
import { ProductShowcase } from "./components/ProductShowcase";
import { Features } from "./components/Features";
import { Founders } from "./components/Founders";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { CookieConsent } from "./components/CookieConsent";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  // Hook para a barra de progresso azul no topo
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-atlas-paper text-atlas-ink font-sans selection:bg-atlas-blue selection:text-white overflow-x-hidden relative">

      {/* BARRA DE PROGRESSO DE LEITURA */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-atlas-blue origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Textura de Ruído (Noise) */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-40 mix-blend-multiply"></div>

      <Navbar />

      {/* 1. HERO SECTION */}
      <main className="relative pt-32 lg:pt-40 px-6 lg:px-12 max-w-[1400px] mx-auto pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">

          <div className="lg:col-span-5 relative z-10 min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-10"
            >
              <div className="flex items-center gap-4 border-b border-atlas-ink/10 pb-4 w-fit">
                <div className="w-1.5 h-1.5 bg-atlas-blue"></div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-atlas-ink/60">
                  Sistema de Gestão Empresarial
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-7xl font-light tracking-tighter leading-[0.95] text-atlas-ink">
                Sua Empresa no <br />
                <span className="font-serif italic text-atlas-blue font-normal">
                  Piloto Automático
                </span>.
              </h1>

              <div className="flex flex-col gap-8 max-w-md pl-1 border-l-2 border-atlas-blue/20">
                <p className="text-sm md:text-base font-normal leading-relaxed text-atlas-ink/80 text-justify">
                  Pare de perder tempo digitando dados. O Atlas integra Vendas, Estoque e Financeiro em um fluxo contínuo. Uma ação gera múltiplas reações automáticas.
                </p>

                <button
                  onClick={() => window.open('https://wa.me/5533999999999', '_blank')}
                  className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-atlas-ink hover:text-atlas-blue transition-colors w-fit pb-2 border-b border-transparent hover:border-atlas-blue cursor-pointer"
                >
                  VER NA PRÁTICA
                  <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-500" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:flex lg:col-span-7 justify-center lg:justify-end relative min-h-[500px] items-center">
            <GeometricArt />
          </div>

        </div>

        <div className="mt-10 lg:mt-0 border-t border-atlas-ink/10 pt-6 flex justify-between items-center text-[9px] uppercase tracking-widest text-atlas-ink/40 font-mono">
          <span>Explore as soluções</span>
          <span>Manhuaçu — MG</span>
        </div>

      </main>

      {/* SEÇÕES DO SITE */}
      <Infrastructure />
      <StatsBar />
      <Segments />
      <ProductShowcase />
      <Features />
      <Founders />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />

      {/* ELEMENTOS FLUTUANTES */}
      <FloatingWhatsApp />
      <CookieConsent />

    </div>
  )
}

export default App