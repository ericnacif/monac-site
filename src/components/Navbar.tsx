import { useState, useEffect } from "react";
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
  TrendingUp as GraphIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuPlataforma = {
    operacional: [
      {
        name: "Vendas",
        desc: "Agilize o faturamento (NF-e, NFC-e, PDV).",
        icon: <ShoppingCart size={20} />,
      },
      {
        name: "Estoques",
        desc: "Controle inteligente (Inventário e Produção).",
        icon: <Package size={20} />,
      },
      {
        name: "Logística",
        desc: "Entrega eficiente (Separação e Etiquetas).",
        icon: <Truck size={20} />,
      },
    ],
    financas: [
      {
        name: "Gestão Financeira",
        desc: "O coração do negócio (Fluxo de caixa).",
        icon: <Wallet size={20} />,
      },
      {
        name: "Meios de Pagamento",
        desc: "Receba fácil (Pix, QR Code, Bancos).",
        icon: <QrCode size={20} />,
      },
      {
        name: "Meu Negócio",
        desc: "Sua empresa em dados (Dashboards/BI).",
        icon: <BarChart3 size={20} />,
      },
    ],
  };

  const menuSolucoes = {
    segmentos: [
      {
        name: "Varejo e Comércio",
        desc: "Rapidez no PDV e Giro de Estoque.",
        icon: <Store size={20} />,
      },
      {
        name: "Indústrias",
        desc: "Ordem de Produção (OP) e Ficha Técnica.",
        icon: <Factory size={20} />,
      },
      {
        name: "Distribuidoras",
        desc: "Separação, Lotes e Romaneios.",
        icon: <Building2 size={20} />,
      },
      {
        name: "Prestadores de Serviço",
        desc: "Contratos Recorrentes e NFS-e.",
        icon: <Wrench size={20} />,
      },
    ],
    necessidades: [
      {
        name: "Quero sair das planilhas",
        desc: "Organização profissional para crescer.",
        icon: <FileSpreadsheet size={20} />,
      },
      {
        name: "Migração de Sistema",
        desc: "Troque lentidão por performance.",
        icon: <RefreshCw size={20} />,
      },
      {
        name: "Redução de Custos",
        desc: "Inteligência para evitar desperdícios.",
        icon: <TrendingUp size={20} />,
      },
    ],
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          scrolled || activeDropdown
            ? "bg-white/95 backdrop-blur-md border-monac-ink/5 py-4 shadow-sm"
            : "bg-transparent border-transparent py-6 lg:py-8"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* 1. LOGO GRANDE (Restaurado) */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative z-50 flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/Logo-simbolo-nome-lateral.png"
              alt="Monac Sistemas"
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </a>

          {/* MENUS DESKTOP */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {/* MEGA MENU: PLATAFORMA */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("plataforma")}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest py-4 transition-colors ${activeDropdown === "plataforma" ? "text-monac-blue" : "text-monac-ink/80 hover:text-monac-blue"}`}
              >
                Plataforma{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${activeDropdown === "plataforma" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "plataforma" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-xl shadow-2xl border border-monac-ink/5 p-8 grid grid-cols-12 gap-8 overflow-hidden mt-4"
                  >
                    <div className="col-span-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-monac-ink/40 mb-5 border-b border-monac-ink/5 pb-2">
                        Gestão Operacional
                      </h3>
                      <div className="space-y-4">
                        {menuPlataforma.operacional.map((item, i) => (
                          <a
                            key={i}
                            href="#platform"
                            className="flex items-start gap-4 p-2 rounded-lg hover:bg-monac-paper transition-colors group"
                          >
                            <div className="text-monac-ink/40 group-hover:text-monac-blue transition-colors mt-1">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-monac-ink group-hover:text-monac-blue">
                                {item.name}
                              </div>
                              <div className="text-xs text-monac-ink/50 mt-1 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-monac-ink/40 mb-5 border-b border-monac-ink/5 pb-2">
                        Finanças
                      </h3>
                      <div className="space-y-4">
                        {menuPlataforma.financas.map((item, i) => (
                          <a
                            key={i}
                            href="#platform"
                            className="flex items-start gap-4 p-2 rounded-lg hover:bg-monac-paper transition-colors group"
                          >
                            <div className="text-monac-ink/40 group-hover:text-monac-blue transition-colors mt-1">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-monac-ink group-hover:text-monac-blue">
                                {item.name}
                              </div>
                              <div className="text-xs text-monac-ink/50 mt-1 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4 bg-monac-paper/50 rounded-lg p-6 flex flex-col justify-center border border-monac-ink/5">
                      <div className="flex items-center gap-2 mb-3 text-monac-blue">
                        <GraphIcon size={24} />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          Crescimento
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-monac-ink mb-2">
                        Controle sua empresa de um só lugar.
                      </h4>
                      <p className="text-xs text-monac-ink/60 leading-relaxed mb-6">
                        Organize-se e saiba exatamente para onde estão indo seus
                        investimentos. O primeiro passo é uma gestão inteligente
                        com a MONAC.
                      </p>
                      <button className="text-xs font-bold uppercase tracking-widest text-monac-blue hover:underline text-left flex items-center gap-2">
                        Começar Agora <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MEGA MENU: SOLUÇÕES */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solucoes")}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest py-4 transition-colors ${activeDropdown === "solucoes" ? "text-monac-blue" : "text-monac-ink/80 hover:text-monac-blue"}`}
              >
                Soluções{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${activeDropdown === "solucoes" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "solucoes" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[750px] bg-white rounded-xl shadow-2xl border border-monac-ink/5 p-8 grid grid-cols-2 gap-10 overflow-hidden mt-4"
                  >
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-monac-ink/40 mb-5 border-b border-monac-ink/5 pb-2">
                        Por Segmento
                      </h3>
                      <div className="space-y-4">
                        {menuSolucoes.segmentos.map((item, i) => (
                          <a
                            key={i}
                            href="#segments"
                            className="flex items-start gap-4 p-2 rounded-lg hover:bg-monac-paper transition-colors group"
                          >
                            <div className="text-monac-ink/40 group-hover:text-monac-blue transition-colors mt-1">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-monac-ink group-hover:text-monac-blue">
                                {item.name}
                              </div>
                              <div className="text-xs text-monac-ink/50 mt-1 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="bg-monac-blue/[0.02] -m-8 p-8 rounded-r-xl border-l border-monac-ink/5">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-monac-blue mb-5 border-b border-monac-blue/10 pb-2">
                        Sua Necessidade
                      </h3>
                      <div className="space-y-4">
                        {menuSolucoes.necessidades.map((item, i) => (
                          <a
                            key={i}
                            href="#features"
                            className="flex items-start gap-4 p-2 rounded-lg hover:bg-white transition-colors group"
                          >
                            <div className="text-monac-blue transition-colors mt-1">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-monac-ink group-hover:text-monac-blue">
                                {item.name}
                              </div>
                              <div className="text-xs text-monac-ink/50 mt-1 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* LINKS RESTANTES (Removidos Academy e Ajuda) */}
            <a
              href="#pricing"
              className="text-sm font-bold uppercase tracking-widest text-monac-ink/80 hover:text-monac-blue transition-colors"
            >
              Planos
            </a>

            <a
              href="#about"
              className="text-sm font-bold uppercase tracking-widest text-monac-ink/80 hover:text-monac-blue transition-colors"
            >
              Quem Somos
            </a>
          </div>

          {/* BOTÃO CONSULTOR (Login removido) */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() =>
                window.open("https://wa.me/5533997088999", "_blank")
              }
              className="h-12 px-8 rounded-lg bg-monac-blue text-white text-xs font-bold uppercase tracking-widest hover:bg-monac-darkBlue transition-all shadow-lg shadow-monac-blue/20 hover:shadow-monac-blue/40 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Falar com Consultor</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* MENU MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-monac-ink p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-monac-paper z-40 flex flex-col pt-28 px-6 overflow-y-auto"
          >
            <div className="space-y-8 pb-20">
              {/* Mobile Plataforma */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-monac-ink/40 mb-4 font-bold border-b border-monac-ink/10 pb-2">
                  Plataforma
                </h4>
                <div className="grid grid-cols-1 gap-5">
                  {menuPlataforma.operacional
                    .concat(menuPlataforma.financas)
                    .map((item, i) => (
                      <a
                        key={i}
                        href="#platform"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3"
                      >
                        <span className="text-monac-blue">{item.icon}</span>
                        <span className="text-base font-medium text-monac-ink">
                          {item.name}
                        </span>
                      </a>
                    ))}
                </div>
              </div>

              {/* Mobile Soluções */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-monac-ink/40 mb-4 font-bold border-b border-monac-ink/10 pb-2">
                  Soluções
                </h4>
                <div className="grid grid-cols-1 gap-5">
                  {menuSolucoes.segmentos
                    .concat(menuSolucoes.necessidades)
                    .map((item, i) => (
                      <a
                        key={i}
                        href="#segments"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3"
                      >
                        <span className="text-monac-ink/50">{item.icon}</span>
                        <span className="text-base font-medium text-monac-ink">
                          {item.name}
                        </span>
                      </a>
                    ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 text-xl font-semibold text-monac-ink pt-6 border-t border-monac-ink/10">
                <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
                  Planos
                </a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  Quem Somos
                </a>
              </div>

              <div className="pt-6">
                <button
                  onClick={() =>
                    window.open("https://wa.me/5533997088999", "_blank")
                  }
                  className="w-full h-14 rounded-lg bg-monac-blue text-white font-bold uppercase tracking-widest shadow-lg shadow-monac-blue/20"
                >
                  Falar com Consultor
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
