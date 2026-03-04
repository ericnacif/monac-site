import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  Package,
  Wallet,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"vendas" | "estoque" | "financeiro">("vendas");

  const tabData = {
    vendas: {
      accentColor: "bg-monac-blue",
      metricTitle: "Faturamento (Hoje)",
      metricValue: "R$ 14.590",
      growth: "+12%",
      chartHeights: ["30%", "55%", "45%", "85%"],
      card1: { icon: TrendingUp, title: "Nova Venda", value: "R$ 850,00 (Pix)", color: "text-green-600", bg: "bg-green-100" },
      card2: { icon: FileCheck, title: "NF-e Emitida", value: "#4092 - Cliente A", color: "text-monac-blue", bg: "bg-monac-blue/10" },
    },
    estoque: {
      accentColor: "bg-amber-500",
      metricTitle: "Itens em Alerta",
      metricValue: "2 Produtos",
      growth: "Ação Necessária",
      chartHeights: ["60%", "75%", "20%", "50%"],
      card1: { icon: Package, title: "Entrada de Merc.", value: "+150 Unidades", color: "text-monac-ink", bg: "bg-monac-ink/10" },
      card2: { icon: AlertTriangle, title: "Estoque Baixo", value: "Repor: Cimento CP-II", color: "text-amber-600", bg: "bg-amber-100" },
    },
    financeiro: {
      accentColor: "bg-indigo-500",
      metricTitle: "Fluxo de Caixa Previsto",
      metricValue: "R$ 42.100",
      growth: "Positivo",
      chartHeights: ["40%", "30%", "60%", "70%"],
      card1: { icon: Wallet, title: "Contas a Receber", value: "R$ 5.200 (Hoje)", color: "text-indigo-600", bg: "bg-indigo-100" },
      card2: { icon: TrendingUp, title: "Meta Mensal", value: "82% Atingida", color: "text-green-600", bg: "bg-green-100" },
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto overflow-hidden">

      {/* Decoração de fundo — círculo azul sutil */}
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,71,187,0.05) 0%, transparent 70%)",
          transform: "translate(20%, -20%)",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LADO ESQUERDO */}
        <div className="lg:col-span-6 relative z-10 flex flex-col gap-8">

          {/* Badge de lançamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="brand-pill w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-monac-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-monac-blue"></span>
            </span>
            Monac ERP 2026
          </motion.div>

          {/* Headline — Century Gothic Bold (heading padrão) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "'Century Gothic', Futura, 'Trebuchet MS', sans-serif" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-monac-ink leading-[1.08]"
          >
            Sua empresa no{" "}
            <br />
            <span className="text-monac-blue">
              Piloto Automático.
            </span>
          </motion.h1>

          {/* Corpo — Poppins Light */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-monac-ink/60 leading-relaxed max-w-lg font-light"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            Elimine planilhas, furos no estoque e a desorganização financeira.
            O <strong className="font-semibold text-monac-ink">Monac</strong> integra
            Vendas, Produção e Finanças em uma plataforma feita para quem quer crescer.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button
              onClick={() => window.open("https://wa.me/5533999999999", "_blank")}
              className="btn-monac-primary"
            >
              Falar com Consultor
              <ArrowRight size={18} />
            </button>

            <button className="btn-monac-outline">
              Ver Vídeo Demo
            </button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2"
          >
            {["Implantação Acompanhada", "Suporte Humanizado"].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                <span
                  className="text-xs text-monac-ink/50 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                >
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* LADO DIREITO — Dashboard */}
        <div className="lg:col-span-6 relative z-10 perspective-1000 lg:pl-12">

          {/* Abas do Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-2 mb-6 justify-center lg:justify-start"
          >
            {(["vendas", "estoque", "financeiro"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-widest transition-all relative`}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  color: activeTab === tab ? '#fff' : 'rgba(16,24,32,0.5)',
                }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-bg"
                    className={`absolute inset-0 rounded-full ${tabData[tab].accentColor} -z-10`}
                  />
                )}
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Card do Sistema */}
          <motion.div
            initial={{ opacity: 0, rotateX: 10, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, rotateX: 5, transition: { duration: 0.3 } }}
            className="relative bg-white rounded-2xl shadow-2xl border border-monac-ink/5 overflow-hidden w-full aspect-[4/3] max-w-lg mx-auto lg:mr-0 cursor-pointer group"
            style={{ boxShadow: "0 25px 60px rgba(0,71,187,0.1), 0 8px 20px rgba(0,0,0,0.06)" }}
          >
            {/* Header */}
            <div className="h-12 bg-monac-paper/80 backdrop-blur-sm border-b border-monac-ink/5 flex items-center px-4 gap-2 transition-colors group-hover:bg-monac-paper">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
              </div>
              <div className="ml-4 h-2 w-24 bg-monac-ink/5 rounded-full"></div>
              {/* Logo pequena no header do dashboard */}
              <div className="ml-auto flex items-center gap-1.5 opacity-30">
                <div className="w-4 h-4 rounded-full border border-monac-blue"></div>
                <span className="text-[8px] font-bold tracking-widest text-monac-ink"
                  style={{ fontFamily: "'Century Gothic', sans-serif" }}>MONAC</span>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6 grid grid-cols-3 gap-6 h-full relative">
              {/* Sidebar */}
              <div className="col-span-1 space-y-3 border-r border-monac-ink/5 pr-4">
                <div className="h-8 w-full bg-monac-ink/5 rounded-lg flex items-center px-2 relative overflow-hidden transition-all group-hover:bg-monac-ink/10">
                  <motion.div layoutId="sidebar-accent" className={`w-1.5 h-4 rounded absolute left-2 ${current.accentColor}`} />
                </div>
                <div className="h-2 w-3/4 bg-monac-ink/5 rounded-full mt-4 opacity-60"></div>
                <div className="h-2 w-1/2 bg-monac-ink/5 rounded-full opacity-60"></div>
                <div className="h-2 w-2/3 bg-monac-ink/5 rounded-full opacity-60"></div>
                <div className="mt-8 h-20 w-full bg-monac-ink/5 rounded-lg opacity-40"></div>
              </div>

              {/* Área principal */}
              <div className="col-span-2 flex flex-col gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-between items-end mb-2"
                  >
                    <div>
                      <div
                        className="text-[9px] uppercase text-monac-ink/40 font-semibold mb-1"
                        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.12em' }}
                      >
                        {current.metricTitle}
                      </div>
                      {/* Número em Glacial Indifference — regra do guia */}
                      <div
                        className="text-2xl text-monac-ink"
                        style={{ fontFamily: "'Glacial Indifference', Outfit, sans-serif", fontWeight: 400 }}
                      >
                        {current.metricValue}
                      </div>
                    </div>
                    <div className={`text-xs font-semibold px-2 py-1 rounded ${
                      activeTab === "estoque" ? "bg-amber-100 text-amber-600" : "bg-green-50 text-green-500"
                    }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {current.growth}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Gráfico */}
                <div className="flex-1 bg-monac-paper/30 rounded-xl border border-monac-ink/5 relative overflow-hidden flex items-end px-4 pb-0 pt-8 gap-2 group-hover:border-monac-ink/10 transition-colors">
                  {current.chartHeights.map((height, index) => (
                    <motion.div
                      key={`${activeTab}-${index}`}
                      initial={{ height: "10%" }}
                      animate={{ height: height }}
                      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                      className={`w-full rounded-t-sm relative ${index === 3 ? `${current.accentColor} shadow-lg` : "bg-monac-ink/10"}`}
                    >
                      {index === 3 && <div className="absolute inset-0 bg-white/20 animate-pulse"></div>}
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2 opacity-50">
                  <div className="h-12 bg-monac-paper/50 rounded-lg border border-monac-ink/5"></div>
                  <div className="h-12 bg-monac-paper/50 rounded-lg border border-monac-ink/5"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards flutuantes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`card1-${activeTab}`}
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 20, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute top-28 -right-4 lg:-right-12 bg-white p-4 rounded-xl shadow-xl border border-monac-ink/5 flex items-center gap-3 z-30"
              style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${current.card1.bg} ${current.card1.color}`}>
                <current.card1.icon size={20} />
              </div>
              <div>
                <div className="label-brand text-monac-ink/40" style={{ marginBottom: "2px", fontSize: "9px" }}>{current.card1.title}</div>
                <div className="text-sm font-semibold text-monac-ink whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {current.card1.value}
                </div>
              </div>
            </motion.div>

            <motion.div
              key={`card2-${activeTab}`}
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -20, y: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute bottom-12 -left-4 lg:-left-8 bg-white p-4 rounded-xl shadow-xl border border-monac-ink/5 flex items-center gap-3 z-30"
              style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
            >
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${current.card2.bg} ${current.card2.color}`}>
                <current.card2.icon size={20} />
              </div>
              <div>
                <div className="label-brand text-monac-ink/40" style={{ marginBottom: "2px", fontSize: "9px" }}>{current.card2.title}</div>
                <div className="text-sm font-semibold text-monac-ink whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {current.card2.value}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
