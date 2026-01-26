import { Navbar } from "./components/Navbar";
import { GeometricArt } from "./components/GeometricArt";
import { Infrastructure } from "./components/Infrastructure";
import { StatsBar } from "./components/StatsBar"; // <--- NOVO
import { Segments } from "./components/Segments";
import { ProductShowcase } from "./components/ProductShowcase";
import { Features } from "./components/Features";
import { Founders } from "./components/Founders";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp"; // <--- NOVO
import { useTranslation } from "react-i18next";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-atlas-paper text-atlas-ink font-sans selection:bg-atlas-blue selection:text-white overflow-x-hidden relative">

      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-40 mix-blend-multiply"></div>

      <Navbar />

      {/* 1. HERO */}
      <main className="relative pt-32 lg:pt-40 px-6 lg:px-12 max-w-[1400px] mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
          {/* ... (Bloco Hero Texto e Arte Geométrica mantém igual) ... */}
          {/* Se precisar, me peça o código da Hero de volta, mas acredito que você já tem */}
          <div className="lg:col-span-5 relative z-10 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i18n.language}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-10"
              >
                <div className="flex items-center gap-4 border-b border-atlas-ink/10 pb-4 w-fit">
                  <div className="w-1.5 h-1.5 bg-atlas-blue"></div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-atlas-ink/60">
                    Sistema de Gestão Empresarial
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-7xl font-light tracking-tighter leading-[0.95] text-atlas-ink">
                  {t('hero.title_start')} <br />
                  <span className="font-serif italic text-atlas-blue font-normal">
                    {t('hero.title_highlight')}
                  </span> <br />
                  {t('hero.title_end')}
                </h1>
                <div className="flex flex-col gap-8 max-w-md pl-1 border-l-2 border-atlas-blue/20">
                  <p className="text-sm md:text-base font-normal leading-relaxed text-atlas-ink/80 text-justify">
                    {t('hero.subtitle')}
                  </p>
                  <button
                    onClick={() => window.open('https://wa.me/5533999999999', '_blank')}
                    className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-atlas-ink hover:text-atlas-blue transition-colors w-fit pb-2 border-b border-transparent hover:border-atlas-blue cursor-pointer"
                  >
                    {t('hero.cta_primary')}
                    <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-500" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end relative min-h-[500px] items-center">
            <GeometricArt />
          </div>
        </div>
      </main>

      <Infrastructure />

      {/* STATS BAR (Novo) */}
      <StatsBar />

      <Segments />
      <ProductShowcase />
      <Features />
      <Founders />
      <Pricing />
      <FAQ />
      <Footer />

      {/* WHATSAPP FLUTUANTE (Novo) */}
      <FloatingWhatsApp />

    </div>
  )
}

export default App