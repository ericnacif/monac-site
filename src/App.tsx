import { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { CookieConsent } from "./components/CookieConsent";
import { SplashScreen } from "./components/SplashScreen";
import { Hero } from "./components/Hero";
import { SEO } from "./components/SEO";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";

const Stats = lazy(() =>
  import("./components/Stats").then((m) => ({ default: m.Stats })),
);
const PainPoints = lazy(() =>
  import("./components/PainPoints").then((m) => ({ default: m.PainPoints })),
);
const Comparison = lazy(() =>
  import("./components/Comparison").then((m) => ({ default: m.Comparison })),
);
const Segments = lazy(() =>
  import("./components/Segments").then((m) => ({ default: m.Segments })),
);
const Platform = lazy(() =>
  import("./components/Platform").then((m) => ({ default: m.Platform })),
);
const Pricing = lazy(() =>
  import("./components/Pricing").then((m) => ({ default: m.Pricing })),
);
const Testimonials = lazy(() =>
  import("./components/Testimonials").then((m) => ({
    default: m.Testimonials,
  })),
);
const Founders = lazy(() =>
  import("./components/Founders").then((m) => ({ default: m.Founders })),
);
const Academy = lazy(() =>
  import("./components/Academy").then((m) => ({ default: m.Academy })),
);
const CTA = lazy(() =>
  import("./components/CTA").then((m) => ({ default: m.CTA })),
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const cinematicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 15, filter: "blur(8px)" },
    in: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: cinematicEase },
    },
    out: {
      opacity: 0,
      y: -15,
      filter: "blur(8px)",
      transition: { duration: 0.5, ease: cinematicEase },
    },
  };

  const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Suspense
        fallback={
          <div className="h-[50vh] w-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-monac-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        {children}
      </Suspense>
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <SEO
                title="Monac ERP — O Sistema Operacional da sua Empresa"
                description="Gerencie vendas, estoque, finanças e emissão fiscal em um só lugar. O ERP mais completo para pequenas e médias empresas brasileiras."
              />

              {/* Visível em todas as telas */}
              <Hero />
              <Stats />
              <PainPoints />

              {/* Oculto no Mobile - O usuário do celular usará o menu para explorar! */}
              <div className="hidden lg:block">
                <Comparison />
                <Segments />
                <Platform />
                <Pricing />
                <Testimonials />
                <Founders />
                <Academy />
              </div>

              <CTA />
            </PageWrapper>
          }
        />

        {/* Páginas Internas Acessadas via Menu Hamburguer */}
        <Route
          path="/plataforma"
          element={
            <PageWrapper>
              <SEO
                title="Plataforma | Monac ERP"
                description="Uma plataforma completa que substitui meia dúzia de ferramentas desconectadas. Financeiro, fiscal, estoque e mobile."
                path="/plataforma"
              />
              <Platform />
            </PageWrapper>
          }
        />
        <Route
          path="/solucoes"
          element={
            <PageWrapper>
              <SEO
                title="Soluções por Segmento | Monac ERP"
                description="Módulos específicos para Varejo, Indústrias, Distribuidoras e Prestadores de Serviço."
                path="/solucoes"
              />
              <Segments />
            </PageWrapper>
          }
        />
        <Route
          path="/planos"
          element={
            <PageWrapper>
              <SEO
                title="Planos e Preços | Monac ERP"
                description="Escolha o plano ideal para o seu momento. Transparência total. Sem taxas escondidas de implantação surpresa."
                path="/planos"
              />
              <Pricing />
            </PageWrapper>
          }
        />
        <Route
          path="/quem-somos"
          element={
            <PageWrapper>
              <SEO
                title="Quem Somos | Monac ERP"
                description="Tecnologia de ponta. DNA de negócios. Conheça a história e os fundadores da Monac."
                path="/quem-somos"
              />
              <Founders />
              <Academy />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {showSplash && <SplashScreen key="splash" />}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showSplash ? 0 : 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="min-h-screen bg-white dark:bg-monac-ink text-monac-ink dark:text-white bg-tech-grid font-sans selection:bg-monac-blue selection:text-white overflow-x-hidden relative transition-colors duration-700 ease-in-out"
        >
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-monac-blue origin-left z-[60]"
            style={{ scaleX }}
            aria-hidden="true"
          />
          <Navbar />
          <main className="pt-24 lg:pt-28">
            <AnimatedRoutes />
          </main>
          <Footer />
          <FloatingWhatsApp />
          <CookieConsent />
        </motion.div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
