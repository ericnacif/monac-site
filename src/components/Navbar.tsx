import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Package,
  Truck,
  Wallet,
  QrCode,
  BarChart3,
  Store,
  Factory,
  Building2,
  Wrench,
  FileSpreadsheet,
  RefreshCw,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { DarkModeToggle } from "./DarkModeToggle";
import { openWhatsApp } from "../config";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const menuPlataforma = {
    operacional: [
      {
        name: "Vendas",
        desc: "NF-e, NFC-e e PDV integrados.",
        icon: <ShoppingCart size={20} aria-hidden="true" />,
      },
      {
        name: "Estoques",
        desc: "Inventário e produção inteligentes.",
        icon: <Package size={20} aria-hidden="true" />,
      },
      {
        name: "Logística",
        desc: "Separação e etiquetas eficientes.",
        icon: <Truck size={20} aria-hidden="true" />,
      },
    ],
    financas: [
      {
        name: "Gestão Financeira",
        desc: "Fluxo de caixa em tempo real.",
        icon: <Wallet size={20} aria-hidden="true" />,
      },
      {
        name: "Meios de Pagamento",
        desc: "Pix, QR Code e bancos.",
        icon: <QrCode size={20} aria-hidden="true" />,
      },
      {
        name: "Meu Negócio",
        desc: "Dashboards e BI.",
        icon: <BarChart3 size={20} aria-hidden="true" />,
      },
    ],
  };

  const menuSolucoes = {
    segmentos: [
      {
        name: "Varejo e Comércio",
        desc: "Rapidez no PDV e giro de estoque.",
        icon: <Store size={20} aria-hidden="true" />,
      },
      {
        name: "Indústrias",
        desc: "OP e Ficha Técnica.",
        icon: <Factory size={20} aria-hidden="true" />,
      },
      {
        name: "Distribuidoras",
        desc: "Separação, lotes e romaneios.",
        icon: <Building2 size={20} aria-hidden="true" />,
      },
      {
        name: "Prestadores de Serviço",
        desc: "Contratos e NFS-e.",
        icon: <Wrench size={20} aria-hidden="true" />,
      },
    ],
    necessidades: [
      {
        name: "Quero sair das planilhas",
        desc: "Organização profissional.",
        icon: <FileSpreadsheet size={20} aria-hidden="true" />,
      },
      {
        name: "Migração de Sistema",
        desc: "Performance superior.",
        icon: <RefreshCw size={20} aria-hidden="true" />,
      },
      {
        name: "Redução de Custos",
        desc: "Inteligência para crescer.",
        icon: <TrendingUp size={20} aria-hidden="true" />,
      },
    ],
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed w-full z-50"
      >
        <nav
          className={`w-full transition-all duration-500 border-b ${
            scrolled || activeDropdown
              ? "bg-white/95 dark:bg-monac-ink/95 backdrop-blur-md border-monac-ink/5 dark:border-white/5 py-3 shadow-sm"
              : "bg-transparent border-transparent py-5 lg:py-6"
          }`}
          onMouseLeave={() => setActiveDropdown(null)}
          aria-label="Navegação principal"
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
            <Link
              to="/"
              className="relative z-50 flex items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Monac Sistemas — Ir para o início"
            >
              <img
                src="/Logo-simbolo-nome-lateral.png"
                alt="Monac ERP"
                className="h-14 lg:h-16 w-auto object-contain"
                loading="eager"
              />
            </Link>

            <div
              className="hidden lg:flex items-center gap-8 xl:gap-10"
              role="menubar"
            >
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("plataforma")}
              >
                <button
                  className={`nav-link flex items-center gap-1.5 ${activeDropdown === "plataforma" ? "text-monac-blue" : ""}`}
                  aria-expanded={activeDropdown === "plataforma"}
                  aria-haspopup="true"
                >
                  Plataforma
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeDropdown === "plataforma" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "plataforma" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[860px] bg-white dark:bg-monac-ink rounded-2xl shadow-2xl border border-monac-ink/5 dark:border-white/10 p-8 grid grid-cols-12 gap-8 mt-4"
                      role="menu"
                    >
                      <div className="col-span-4">
                        <h3 className="label-brand text-monac-ink/40 dark:text-white/30 mb-5 border-b border-monac-ink/5 dark:border-white/10 pb-2">
                          Gestão Operacional
                        </h3>
                        <div className="space-y-3">
                          {menuPlataforma.operacional.map((item, i) => (
                            <Link
                              key={i}
                              to="/plataforma"
                              role="menuitem"
                              className="flex items-start gap-4 p-2 rounded-xl hover:bg-monac-paper dark:hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-monac-ink/40 group-hover:text-monac-blue mt-0.5 transition-colors">
                                {item.icon}
                              </div>
                              <div>
                                <div
                                  className="text-sm font-semibold text-monac-ink dark:text-white group-hover:text-monac-blue"
                                  style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                  {item.name}
                                </div>
                                <div className="text-xs text-monac-ink/50 dark:text-white/40 mt-0.5 font-light">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-4">
                        <h3 className="label-brand text-monac-ink/40 dark:text-white/30 mb-5 border-b border-monac-ink/5 dark:border-white/10 pb-2">
                          Finanças
                        </h3>
                        <div className="space-y-3">
                          {menuPlataforma.financas.map((item, i) => (
                            <Link
                              key={i}
                              to="/plataforma"
                              role="menuitem"
                              className="flex items-start gap-4 p-2 rounded-xl hover:bg-monac-paper dark:hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-monac-ink/40 group-hover:text-monac-blue mt-0.5 transition-colors">
                                {item.icon}
                              </div>
                              <div>
                                <div
                                  className="text-sm font-semibold text-monac-ink dark:text-white group-hover:text-monac-blue"
                                  style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                  {item.name}
                                </div>
                                <div className="text-xs text-monac-ink/50 dark:text-white/40 mt-0.5 font-light">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-4 bg-monac-paper/60 dark:bg-white/5 rounded-xl p-6 flex flex-col justify-center border border-monac-ink/5 dark:border-white/5">
                        <h4
                          className="font-bold text-monac-ink dark:text-white mb-2 text-base"
                          style={{
                            fontFamily: "'Century Gothic', Futura, sans-serif",
                          }}
                        >
                          Controle sua empresa de um só lugar.
                        </h4>
                        <p className="text-xs text-monac-ink/60 dark:text-white/40 leading-relaxed mb-4 font-light">
                          Organize-se e saiba exatamente para onde estão indo
                          seus investimentos.
                        </p>
                        <button
                          onClick={() => openWhatsApp()}
                          className="label-brand text-monac-blue flex items-center gap-2 hover:underline"
                          style={{ marginBottom: 0 }}
                        >
                          Começar Agora{" "}
                          <ArrowRight size={14} aria-hidden="true" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("solucoes")}
              >
                <button
                  className={`nav-link flex items-center gap-1.5 ${activeDropdown === "solucoes" ? "text-monac-blue" : ""}`}
                  aria-expanded={activeDropdown === "solucoes"}
                  aria-haspopup="true"
                >
                  Soluções
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeDropdown === "solucoes" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "solucoes" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white dark:bg-monac-ink rounded-2xl shadow-2xl border border-monac-ink/5 dark:border-white/10 p-8 grid grid-cols-2 gap-10 mt-4"
                      role="menu"
                    >
                      <div>
                        <h3 className="label-brand text-monac-ink/40 dark:text-white/30 mb-5 border-b border-monac-ink/5 dark:border-white/10 pb-2">
                          Por Segmento
                        </h3>
                        <div className="space-y-3">
                          {menuSolucoes.segmentos.map((item, i) => (
                            <Link
                              key={i}
                              to="/solucoes"
                              role="menuitem"
                              className="flex items-start gap-4 p-2 rounded-xl hover:bg-monac-paper dark:hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-monac-ink/40 group-hover:text-monac-blue mt-0.5 transition-colors">
                                {item.icon}
                              </div>
                              <div>
                                <div
                                  className="text-sm font-semibold text-monac-ink dark:text-white group-hover:text-monac-blue"
                                  style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                  {item.name}
                                </div>
                                <div className="text-xs text-monac-ink/50 dark:text-white/40 mt-0.5 font-light">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="bg-monac-blue/[0.03] dark:bg-monac-blue/[0.08] -m-8 p-8 rounded-r-2xl border-l border-monac-ink/5 dark:border-white/5">
                        <h3 className="label-brand text-monac-blue mb-5 border-b border-monac-blue/10 pb-2">
                          Sua Necessidade
                        </h3>
                        <div className="space-y-3">
                          {menuSolucoes.necessidades.map((item, i) => (
                            <Link
                              key={i}
                              to="/solucoes"
                              role="menuitem"
                              className="flex items-start gap-4 p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-monac-blue mt-0.5">
                                {item.icon}
                              </div>
                              <div>
                                <div
                                  className="text-sm font-semibold text-monac-ink dark:text-white group-hover:text-monac-blue"
                                  style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                  {item.name}
                                </div>
                                <div className="text-xs text-monac-ink/50 dark:text-white/40 mt-0.5 font-light">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/planos" className="nav-link">
                Planos
              </Link>
              <Link to="/quem-somos" className="nav-link">
                Quem Somos
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <DarkModeToggle />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  openWhatsApp("Olá! Gostaria de conhecer o Monac ERP.")
                }
                className="btn-monac-primary"
                aria-label="Falar com consultor no WhatsApp"
              >
                Falar com Consultor <ArrowRight size={16} aria-hidden="true" />
              </motion.button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-monac-ink dark:text-white p-2"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={28} aria-hidden="true" />
              ) : (
                <Menu size={28} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-monac-paper dark:bg-monac-ink z-40 flex flex-col pt-28 px-6 overflow-y-auto"
            aria-label="Menu mobile"
            role="dialog"
            aria-modal="true"
          >
            <div className="space-y-8 pb-20">
              <div className="flex items-center justify-between py-2 border-b border-monac-ink/10 dark:border-white/10">
                <span
                  className="text-sm font-semibold text-monac-ink dark:text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Modo escuro
                </span>
                <DarkModeToggle />
              </div>

              <div>
                <h4 className="label-brand text-monac-ink/40 dark:text-white/30 mb-4 border-b border-monac-ink/10 dark:border-white/10 pb-2">
                  Plataforma
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    ...menuPlataforma.operacional,
                    ...menuPlataforma.financas,
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to="/plataforma"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3"
                    >
                      <span className="text-monac-blue">{item.icon}</span>
                      <span
                        className="text-base font-medium text-monac-ink dark:text-white"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="label-brand text-monac-ink/40 dark:text-white/30 mb-4 border-b border-monac-ink/10 dark:border-white/10 pb-2">
                  Soluções
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    ...menuSolucoes.segmentos,
                    ...menuSolucoes.necessidades,
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to="/solucoes"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3"
                    >
                      <span className="text-monac-ink/40 dark:text-white/40">
                        {item.icon}
                      </span>
                      <span
                        className="text-base font-medium text-monac-ink dark:text-white"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 pt-4 border-t border-monac-ink/10 dark:border-white/10">
                <Link
                  to="/planos"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-semibold text-monac-ink dark:text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Planos
                </Link>
                <Link
                  to="/quem-somos"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-semibold text-monac-ink dark:text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Quem Somos
                </Link>
              </div>

              <button
                onClick={() => {
                  openWhatsApp();
                  setIsMenuOpen(false);
                }}
                className="btn-monac-primary w-full h-14"
                aria-label="Falar com consultor no WhatsApp"
              >
                Falar com Consultor
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(16,24,32,0.65);
          transition: color 0.2s;
          padding: 1rem 0;
        }
        .dark .nav-link { color: rgba(255,255,255,0.6); }
        .nav-link:hover { color: #0047BB; }
        .dark .nav-link:hover { color: #4d8eff; }
      `}</style>
    </>
  );
}
