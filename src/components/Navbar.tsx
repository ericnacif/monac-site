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
      { name: "Vendas", desc: "Agilize o faturamento (NF-e, NFC-e, PDV).", icon: <ShoppingCart size={20} /> },
      { name: "Estoques", desc: "Controle inteligente (Inventário e Produção).", icon: <Package size={20} /> },
      { name: "Logística", desc: "Entrega eficiente (Separação e Etiquetas).", icon: <Truck size={20} /> },
    ],
    financas: [
      { name: "Gestão Financeira", desc: "O coração do negócio (Fluxo de caixa).", icon: <Wallet size={20} /> },
      { name: "Meios de Pagamento", desc: "Receba fácil (Pix, QR Code, Bancos).", icon: <QrCode size={20} /> },
      { name: "Meu Negócio", desc: "Sua empresa em dados (Dashboards/BI).", icon: <BarChart3 size={20} /> },
    ],
  };

  const menuSolucoes = {
    segmentos: [
      { name: "Varejo e Comércio", desc: "Rapidez no PDV e Giro de Estoque.", icon: <Store size={20} /> },
      { name: "Indústrias", desc: "Ordem de Produção (OP) e Ficha Técnica.", icon: <Factory size={20} /> },
      { name: "Distribuidoras", desc: "Separação, Lotes e Romaneios.", icon: <Building2 size={20} /> },
      { name: "Prestadores de Serviço", desc: "Contratos Recorrentes e NFS-e.", icon: <Wrench size={20} /> },
    ],
    necessidades: [
      { name: "Quero sair das planilhas", desc: "Organização profissional para crescer.", icon: <FileSpreadsheet size={20} /> },
      { name: "Migração de Sistema", desc: "Troque lentidão por performance.", icon: <RefreshCw size={20} /> },
      { name: "Redução de Custos", desc: "Inteligência para evitar desperdícios.", icon: <TrendingUp size={20} /> },
    ],
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          scrolled || activeDropdown
            ? "bg-white/95 backdrop-blur-md border-monac-ink/5 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5 lg:py-6"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative z-50 flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/Logo-simbolo-nome-lateral.png"
              alt="Monac Sistemas"
              className="h-14 lg:h-16 w-auto object-contain"
            />
          </a>

          {/* NAV DESKTOP */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">

            {/* MEGA MENU: PLATAFORMA */}
            <div className="relative" onMouseEnter={() => setActiveDropdown("plataforma")}>
              <button
                className={`flex items-center gap-1.5 py-4 transition-colors nav-link ${
                  activeDropdown === "plataforma" ? "text-monac-blue" : ""
                }`}
              >
                Plataforma
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
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-2xl border border-monac-ink/5 p-8 grid grid-cols-12 gap-8 overflow-hidden mt-4"
                  >
                    <div className="col-span-4">
                      <h3 className="label-brand text-monac-ink/40 mb-5 border-b border-monac-ink/5 pb-2">
                        Gestão Operacional
                      </h3>
                      <div className="space-y-4">
                        {menuPlataforma.operacional.map((item, i) => (
                          <a key={i} href="#platform" className="flex items-start gap-4 p-2 rounded-xl hover:bg-monac-paper transition-colors group">
                            <div className="text-monac-ink/40 group-hover:text-monac-blue transition-colors mt-1">{item.icon}</div>
                            <div>
                              <div className="text-sm font-semibold text-monac-ink group-hover:text-monac-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.name}</div>
                              <div className="text-xs text-monac-ink/50 mt-1 leading-snug font-light">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4">
                      <h3 className="label-brand text-monac-ink/40 mb-5 border-b border-monac-ink/5 pb-2">
                        Finanças
                      </h3>
                      <div className="space-y-4">
                        {menuPlataforma.financas.map((item, i) => (
                          <a key={i} href="#platform" className="flex items-start gap-4 p-2 rounded-xl hover:bg-monac-paper transition-colors group">
                            <div className="text-monac-ink/40 group-hover:text-monac-blue transition-colors mt-1">{item.icon}</div>
                            <div>
                              <div className="text-sm font-semibold text-monac-ink group-hover:text-monac-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.name}</div>
                              <div className="text-xs text-monac-ink/50 mt-1 leading-snug font-light">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-4 bg-monac-paper/60 rounded-xl p-6 flex flex-col justify-center border border-monac-ink/5">
                      <div className="flex items-center gap-2 mb-3 text-monac-blue">
                        <GraphIcon size={22} />
                        <span className="label-brand" style={{ marginBottom: 0 }}>Crescimento</span>
                      </div>
                      <h4 className="font-semibold text-monac-ink mb-2 text-base" style={{ fontFamily: "'Century Gothic', Futura, sans-serif" }}>
                        Controle sua empresa de um só lugar.
                      </h4>
                      <p className="text-xs text-monac-ink/60 leading-relaxed mb-6 font-light">
                        Organize-se e saiba exatamente para onde estão indo seus investimentos.
                      </p>
                      <button className="label-brand text-monac-blue hover:underline text-left flex items-center gap-2" style={{ marginBottom: 0 }}>
                        Começar Agora <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MEGA MENU: SOLUÇÕES */}
            <div className="relative" onMouseEnter={() => setActiveDropdown("solucoes")}>
              <button
                className={`flex items-center gap-1.5 py-4 transition-colors nav-link ${
                  activeDropdown === "solucoes" ? "text-monac-blue" : ""
                }`}
              >
                Soluções
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
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[750px] bg-white rounded-2xl shadow-2xl border border-monac-ink/5 p-8 grid grid-cols-2 gap-10 overflow-hidden mt-4"
                  >
                    <div>
                      <h3 className="label-brand text-monac-ink/40 mb-5 border-b border-monac-ink/5 pb-2">
                        Por Segmento
                      </h3>
                      <div className="space-y-4">
                        {menuSolucoes.segmentos.map((item, i) => (
                          <a key={i} href="#segments" className="flex items-start gap-4 p-2 rounded-xl hover:bg-monac-paper transition-colors group">
                            <div className="text-monac-ink/40 group-hover:text-monac-blue transition-colors mt-1">{item.icon}</div>
                            <div>
                              <div className="text-sm font-semibold text-monac-ink group-hover:text-monac-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.name}</div>
                              <div className="text-xs text-monac-ink/50 mt-1 leading-snug font-light">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="bg-monac-blue/[0.03] -m-8 p-8 rounded-r-2xl border-l border-monac-ink/5">
                      <h3 className="label-brand text-monac-blue mb-5 border-b border-monac-blue/10 pb-2">
                        Sua Necessidade
                      </h3>
                      <div className="space-y-4">
                        {menuSolucoes.necessidades.map((item, i) => (
                          <a key={i} href="#features" className="flex items-start gap-4 p-2 rounded-xl hover:bg-white transition-colors group">
                            <div className="text-monac-blue transition-colors mt-1">{item.icon}</div>
                            <div>
                              <div className="text-sm font-semibold text-monac-ink group-hover:text-monac-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.name}</div>
                              <div className="text-xs text-monac-ink/50 mt-1 leading-snug font-light">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#pricing" className="nav-link">Planos</a>
            <a href="#about" className="nav-link">Quem Somos</a>
          </div>

          {/* CTA DESKTOP */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => window.open("https://wa.me/5533997088999", "_blank")}
              className="btn-monac-primary"
            >
              <span>Falar com Consultor</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* MOBILE TOGGLE */}
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
              <div>
                <h4 className="label-brand text-monac-ink/40 mb-4 border-b border-monac-ink/10 pb-2">
                  Plataforma
                </h4>
                <div className="grid grid-cols-1 gap-5">
                  {menuPlataforma.operacional.concat(menuPlataforma.financas).map((item, i) => (
                    <a key={i} href="#platform" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
                      <span className="text-monac-blue">{item.icon}</span>
                      <span className="text-base font-medium text-monac-ink" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="label-brand text-monac-ink/40 mb-4 border-b border-monac-ink/10 pb-2">
                  Soluções
                </h4>
                <div className="grid grid-cols-1 gap-5">
                  {menuSolucoes.segmentos.concat(menuSolucoes.necessidades).map((item, i) => (
                    <a key={i} href="#segments" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
                      <span className="text-monac-ink/50">{item.icon}</span>
                      <span className="text-base font-medium text-monac-ink" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 pt-6 border-t border-monac-ink/10">
                <a href="#pricing" onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-semibold text-monac-ink" style={{ fontFamily: 'Poppins, sans-serif' }}>Planos</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-semibold text-monac-ink" style={{ fontFamily: 'Poppins, sans-serif' }}>Quem Somos</a>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => window.open("https://wa.me/5533997088999", "_blank")}
                  className="btn-monac-primary w-full h-14"
                >
                  Falar com Consultor
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Estilos inline para nav-link (evita criar arquivo extra) */}
      <style>{`
        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(16, 24, 32, 0.7);
          transition: color 0.2s;
          padding: 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }
        .nav-link:hover { color: #0047BB; }
      `}</style>
    </>
  );
}
