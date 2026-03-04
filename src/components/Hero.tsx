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

// Tipagem rigorosa para evitar que o TS leia como um simples array de números (number[])
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
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-white dark:bg-[#080d14]"
      aria-label="Seção principal"
    >
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

      <motion.div
        ref={ref}
        style={{ opacity }}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-16 lg:pt-36 lg:pb-24 w-full relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-6 space-y-7"
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
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-monac-ink dark:text-white leading-[1.05] tracking-tight"
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
              className="text-monac-ink/60 dark:text-white/60 text-lg lg:text-xl leading-relaxed max-w-lg font-light"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
            >
              Chega de planilhas desatualizadas e sistemas lentos. Gerencie
              vendas, estoque, finanças e fiscal em um só lugar.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
              role="list"
              aria-label="Diferenciais"
            >
              {pills.map((p, i) => (
                <div
                  key={i}
                  role="listitem"
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
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={() =>
                  openWhatsApp("Olá! Quero uma demonstração do Monac ERP.")
                }
                className="btn-monac-primary h-14 px-8 text-sm shine"
                aria-label="Solicitar demonstração gratuita via WhatsApp"
              >
                Começar Gratuitamente{" "}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button
                onClick={() =>
                  openWhatsApp("Olá! Quero ver o Monac ERP em ação.")
                }
                className="h-14 px-8 rounded-xl border border-monac-ink/15 dark:border-white/15 text-monac-ink dark:text-white font-semibold text-sm flex items-center justify-center gap-3 hover:bg-monac-ink/5 dark:hover:bg-white/10 transition-all"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                aria-label="Assistir demonstração em vídeo"
              >
                <div className="w-8 h-8 rounded-full bg-monac-ink/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0 hover:bg-monac-blue hover:text-white transition-colors">
                  <Play size={14} className="ml-0.5" aria-hidden="true" />
                </div>
                Ver Demo
              </button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-monac-ink/40 dark:text-white/30 text-xs font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sem cartão de crédito · Implantação em 48h · Suporte humano
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: cinematicEase }}
            className="lg:col-span-6 relative"
            aria-label="Preview do dashboard Monac"
          >
            <div
              className="absolute inset-0 bg-monac-blue/20 blur-3xl rounded-3xl scale-90"
              aria-hidden="true"
            />

            <div className="relative bg-white dark:bg-white/[0.06] backdrop-blur-sm border border-monac-ink/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-monac-ink/5 dark:border-white/5">
                <div className="flex items-center gap-2" aria-hidden="true">
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
                <div className="w-16" aria-hidden="true" />
              </div>

              <div
                className="flex border-b border-monac-ink/5 dark:border-white/5"
                role="tablist"
                aria-label="Seções do dashboard"
              >
                {dashboardTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    role="tab"
                    aria-selected={activeTab === tab}
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
                        layoutId="tab-indicator"
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
                  <motion.div
                    key={activeTab + "-trend"}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg"
                  >
                    <TrendingUp
                      size={12}
                      className="text-emerald-500 dark:text-emerald-400"
                      aria-hidden="true"
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
                  </motion.div>
                </div>

                <div
                  className="flex items-end gap-2 h-24"
                  role="img"
                  aria-label={`Gráfico de ${activeTab}`}
                >
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
                      className={`flex-1 rounded-t-md ${
                        i === current.bars.indexOf(Math.max(...current.bars))
                          ? "bg-monac-blue"
                          : "bg-monac-ink/5 dark:bg-white/10"
                      }`}
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

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 lg:-right-8 bg-white dark:bg-monac-ink/90 rounded-2xl px-4 py-3 shadow-xl border border-monac-ink/5 dark:border-white/10 flex items-center gap-3"
              aria-hidden="true"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck size={16} />
              </div>
              <div>
                <div
                  className="text-xs font-bold text-monac-ink dark:text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  NF-e Autorizada
                </div>
                <div className="text-[10px] text-monac-ink/50 dark:text-white/40">
                  agora mesmo · 28s
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 lg:-left-8 bg-monac-blue rounded-2xl px-4 py-3 shadow-xl shadow-monac-blue/30 flex items-center gap-3"
              aria-hidden="true"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                <TrendingUp size={16} />
              </div>
              <div>
                <div
                  className="text-xs font-bold text-white"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Margem subiu 15%
                </div>
                <div className="text-[10px] text-white/60">
                  vs. mês anterior
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

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
          <span
            className="text-monac-ink/30 dark:text-white/25 text-[10px] uppercase tracking-widest"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
