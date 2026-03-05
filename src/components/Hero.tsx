import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Play, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { openWhatsApp } from "../config";

const pills = [
  { icon: ShieldCheck, text: "100% Compliance Fiscal" },
  { icon: Zap, text: "30s para emitir NF-e" },
  { icon: TrendingUp, text: "+15% na margem" },
];

const dashboardTabs = ["Financeiro", "Estoque", "Vendas"] as const;
type Tab = (typeof dashboardTabs)[number];

const tabData: Record<
  Tab,
  { bars: number[]; label: string; value: string; trend: string }
> = {
  Financeiro: {
    bars: [40, 65, 50, 80, 60, 90, 75],
    label: "Saldo líquido",
    value: "R$ 142.590",
    trend: "+12%",
  },
  Estoque: {
    bars: [70, 45, 80, 55, 90, 60, 85],
    label: "Giro de estoque",
    value: "847 SKUs",
    trend: "-3 críticos",
  },
  Vendas: {
    bars: [55, 70, 45, 85, 65, 95, 80],
    label: "Ticket médio",
    value: "R$ 1.240",
    trend: "+8%",
  },
};

const cinematicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState<Tab>("Financeiro");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const current = tabData[activeTab];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: cinematicEase },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#080d14]"
      aria-label="Seção principal"
    >
      {/* Fundo Parallax Compartilhado */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,24,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,24,32,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,71,187,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,71,187,0.25),transparent)]" />

        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-monac-blue/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-monac-blue/5 blur-[80px]" />
      </motion.div>

      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-monac-blue/20 dark:via-monac-blue/40 to-transparent"
        aria-hidden="true"
      />

      {/* =========================================
          HERO DESKTOP (Oculto no Mobile) 
          ========================================= */}
      <motion.div
        ref={ref}
        style={{ opacity }}
        className="hidden lg:flex max-w-[1400px] mx-auto px-12 pt-36 pb-24 w-full relative z-10 flex-col"
      >
        <div className="grid grid-cols-12 gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="col-span-6 space-y-7"
          >
            <motion.div variants={itemVariants}>
              <span className="brand-pill">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                  aria-hidden="true"
                />
                Monac ERP™ — Versão 2026
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[4.25rem] font-bold text-monac-ink dark:text-white leading-[1.05] tracking-tight"
              style={{
                fontFamily:
                  "'Century Gothic', Futura, 'Trebuchet MS', sans-serif",
              }}
            >
              O Sistema{" "}
              <span className="relative">
                <span className="gradient-text">Operacional</span>
              </span>
              <br />
              da sua Empresa.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-monac-ink/60 dark:text-white/60 text-xl leading-relaxed max-w-lg font-light"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
            >
              Chega de planilhas desatualizadas e sistemas lentos. Gerencie
              vendas, estoque, finanças e fiscal em um só lugar.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
              role="list"
            >
              {pills.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-monac-ink/5 dark:bg-white/5 border border-monac-ink/10 dark:border-white/10 text-monac-ink/70 dark:text-white/70 hover:border-monac-blue/40 dark:hover:border-monac-blue/40 hover:text-monac-blue dark:hover:text-white transition-all"
                >
                  <p.icon
                    size={14}
                    className="text-monac-blue"
                    aria-hidden="true"
                  />
                  <span
                    className="text-xs font-medium"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {p.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-row gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  openWhatsApp("Olá! Quero uma demonstração do Monac ERP.")
                }
                className="btn-monac-primary h-14 px-8 text-sm shine"
              >
                Começar Gratuitamente <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  openWhatsApp("Olá! Quero ver o Monac ERP em ação.")
                }
                className="h-14 px-8 rounded-xl border border-monac-ink/15 dark:border-white/15 text-monac-ink dark:text-white font-semibold text-sm flex items-center justify-center gap-3 hover:bg-monac-ink/5 dark:hover:bg-white/10 transition-all"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
              >
                <div className="w-8 h-8 rounded-full bg-monac-ink/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0 hover:bg-monac-blue hover:text-white transition-colors">
                  <Play size={14} className="ml-0.5" />
                </div>
                Ver Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: cinematicEase }}
            className="col-span-6 relative"
          >
            <div
              className="absolute inset-0 bg-monac-blue/20 blur-3xl rounded-3xl scale-90"
              aria-hidden="true"
            />

            <div className="relative bg-white dark:bg-white/[0.06] backdrop-blur-sm border border-monac-ink/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-monac-ink/5 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span
                  className="text-monac-ink/40 dark:text-white/40 text-xs"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                  }}
                >
                  monac.com.br/dashboard
                </span>
                <div className="w-16" />
              </div>

              <div className="flex border-b border-monac-ink/5 dark:border-white/5">
                {dashboardTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-xs font-semibold transition-all relative ${
                      activeTab === tab
                        ? "text-monac-ink dark:text-white"
                        : "text-monac-ink/40 dark:text-white/30 hover:text-monac-ink/70 dark:hover:text-white/60"
                    }`}
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: activeTab === tab ? 700 : 500,
                    }}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-indicator-desktop"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-monac-blue"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-end justify-between">
                  <div>
                    <div
                      className="text-monac-ink/40 dark:text-white/40 text-xs mb-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {current.label}
                    </div>
                    <motion.div
                      key={activeTab + "-value"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl text-monac-ink dark:text-white"
                      style={{
                        fontFamily:
                          "'Glacial Indifference', Outfit, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {current.value}
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                    <TrendingUp
                      size={12}
                      className="text-emerald-500 dark:text-emerald-400"
                    />
                    <span
                      className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold"
                      style={{
                        fontFamily:
                          "'Glacial Indifference', Outfit, sans-serif",
                      }}
                    >
                      {current.trend}
                    </span>
                  </div>
                </div>

                <div className="flex items-end gap-2 h-24">
                  {current.bars.map((h, i) => (
                    <motion.div
                      key={activeTab + i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.5,
                        ease: cinematicEase,
                      }}
                      className={`flex-1 rounded-t-md ${i === current.bars.indexOf(Math.max(...current.bars)) ? "bg-monac-blue" : "bg-monac-ink/5 dark:bg-white/10"}`}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Entradas", val: "R$ 38.4k", up: true },
                    { label: "Saídas", val: "R$ 21.2k", up: false },
                    { label: "Pendentes", val: "R$ 12.1k", up: true },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className="bg-monac-ink/[0.02] dark:bg-white/5 rounded-xl p-3 border border-monac-ink/5 dark:border-white/5 hover:border-monac-ink/15 dark:hover:border-white/15 transition-colors"
                    >
                      <div
                        className="text-monac-ink/40 dark:text-white/40 text-[10px] mb-1.5"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        className={`text-sm ${m.up ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400"}`}
                        style={{
                          fontFamily:
                            "'Glacial Indifference', Outfit, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* =========================================
          HERO MOBILE (Oculto no Desktop) 
          Design App-Like, super limpo e direto
          ========================================= */}
      <motion.div
        style={{ opacity }}
        className="flex lg:hidden flex-col items-center justify-center text-center px-6 pt-24 pb-12 w-full relative z-10 min-h-[100svh]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: cinematicEase }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="relative">
            {/* Brilho giratório sutil */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-monac-blue/20 dark:bg-monac-blue/30 rounded-full blur-2xl scale-150"
            />
            {/* Logo símbolo isolada */}
            <img
              src="/logo-simbolo.png"
              alt="Monac"
              className="h-24 w-24 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,71,187,0.3)] mb-4"
            />
          </div>
          <span
            className="text-2xl font-bold text-monac-ink dark:text-white tracking-[0.25em] uppercase ml-1"
            style={{
              fontFamily:
                "'Century Gothic', Futura, 'Trebuchet MS', sans-serif",
            }}
          >
            Monac
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: cinematicEase }}
          className="text-[2.5rem] font-bold text-monac-ink dark:text-white leading-[1.1] tracking-tight mb-5"
          style={{
            fontFamily: "'Century Gothic', Futura, 'Trebuchet MS', sans-serif",
          }}
        >
          O Sistema <br />
          <span className="relative inline-block mt-1">
            <span className="gradient-text">Operacional</span>
          </span>
          <br />
          da sua Empresa.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: cinematicEase }}
          className="text-monac-ink/70 dark:text-white/70 text-base leading-relaxed font-light mb-10 max-w-[280px]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Pare de apagar incêndios. Tenha vendas, finanças e estoque{" "}
          <strong className="font-semibold text-monac-ink dark:text-white">
            na palma da mão.
          </strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: cinematicEase }}
          className="w-full flex flex-col gap-3 max-w-[280px]"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              openWhatsApp("Olá! Quero conhecer o Monac ERP pelo celular.")
            }
            className="btn-monac-primary w-full shadow-xl shadow-monac-blue/20"
          >
            Começar Agora <ArrowRight size={16} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => openWhatsApp("Olá! Quero ver o Monac ERP em ação.")}
            className="btn-monac-outline w-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border-monac-ink/10 dark:border-white/10"
          >
            Ver Plataforma
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Indicador de Scroll Global */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-monac-ink/20 dark:border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-monac-ink/30 dark:bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
