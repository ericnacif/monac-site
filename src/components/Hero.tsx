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
  // Estado para controlar qual aba do dashboard está ativa
  const [activeTab, setActiveTab] = useState<
    "vendas" | "estoque" | "financeiro"
  >("vendas");

  // Configuração dos dados para cada aba (simulação)
  const tabData = {
    vendas: {
      accentColor: "bg-monac-blue",
      metricTitle: "Faturamento (Hoje)",
      metricValue: "R$ 14.590,00",
      growth: "+12%",
      chartHeights: ["30%", "55%", "45%", "85%"], // Alturas das barras do gráfico
      card1: {
        icon: TrendingUp,
        title: "Nova Venda",
        value: "R$ 850,00 (Pix)",
        color: "text-green-600",
        bg: "bg-green-100",
      },
      card2: {
        icon: FileCheck,
        title: "NF-e Emitida",
        value: "#4092 - Cliente A",
        color: "text-monac-blue",
        bg: "bg-monac-blue/10",
      },
    },
    estoque: {
      accentColor: "bg-amber-500",
      metricTitle: "Itens em Alerta",
      metricValue: "2 Produtos",
      growth: "Ação Necessária",
      chartHeights: ["60%", "75%", "20%", "50%"],
      card1: {
        icon: Package,
        title: "Entrada de Merc.",
        value: "+150 Unidades",
        color: "text-monac-ink",
        bg: "bg-monac-ink/10",
      },
      card2: {
        icon: AlertTriangle,
        title: "Estoque Baixo",
        value: "Repor: Cimento CP-II",
        color: "text-amber-600",
        bg: "bg-amber-100",
      },
    },
    financeiro: {
      accentColor: "bg-indigo-500",
      metricTitle: "Fluxo de Caixa Previsto",
      metricValue: "R$ 42.100,00",
      growth: "Positivo",
      chartHeights: ["40%", "30%", "60%", "70%"],
      card1: {
        icon: Wallet,
        title: "Contas a Receber",
        value: "R$ 5.200 (Hoje)",
        color: "text-indigo-600",
        bg: "bg-indigo-100",
      },
      card2: {
        icon: TrendingUp,
        title: "Meta Mensal",
        value: "82% Atingida",
        color: "text-green-600",
        bg: "bg-green-100",
      },
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* --- LADO ESQUERDO: TEXTO E CONVERSÃO (Mantido igual) --- */}
        <div className="lg:col-span-6 relative z-10 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-monac-blue/5 border border-monac-blue/10 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-monac-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-monac-blue"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-monac-blue">
              Monac ERP 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-monac-ink leading-[1.1]"
          >
            Sua empresa no <br />
            <span className="text-monac-blue">Piloto Automático.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-monac-ink/60 leading-relaxed max-w-lg"
          >
            Elimine planilhas, furos no estoque e a desorganização financeira. O{" "}
            <strong>Monac</strong> integra Vendas, Produção e Finanças em uma
            plataforma feita para quem quer crescer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button
              onClick={() =>
                window.open("https://wa.me/5533999999999", "_blank")
              }
              className="h-12 px-8 rounded-lg bg-monac-blue text-white font-bold uppercase tracking-widest hover:bg-monac-darkBlue transition-all shadow-xl shadow-monac-blue/20 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Falar com Consultor
              <ArrowRight size={18} />
            </button>

            <button className="h-12 px-8 rounded-lg border border-monac-ink/10 text-monac-ink font-bold uppercase tracking-widest hover:bg-white hover:border-monac-blue/30 hover:text-monac-blue transition-all flex items-center justify-center">
              Ver Vídeo Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6 text-xs font-medium text-monac-ink/50"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Implantação Acompanhada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Suporte Humanizado</span>
            </div>
          </motion.div>
        </div>

        {/* --- LADO DIREITO: DASHBOARD INTERATIVO --- */}
        <div className="lg:col-span-6 relative z-10 perspective-1000 lg:pl-12">
          {/* Botões de Navegação (Abas) */}
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
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all relative ${
                  activeTab === tab
                    ? "text-white shadow-md"
                    : "text-monac-ink/60 hover:bg-monac-paper"
                }`}
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

          {/* Card Principal (O Sistema) */}
          <motion.div
            initial={{ opacity: 0, rotateX: 10, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // Adicionei um efeito sutil de hover no container inteiro
            whileHover={{
              scale: 1.02,
              rotateX: 5,
              transition: { duration: 0.3 },
            }}
            className="relative bg-white rounded-2xl shadow-2xl border border-monac-ink/5 overflow-hidden w-full aspect-[4/3] max-w-lg mx-auto lg:mr-0 cursor-pointer group"
          >
            {/* Header do Sistema */}
            <div className="h-12 bg-monac-paper/80 backdrop-blur-sm border-b border-monac-ink/5 flex items-center px-4 gap-2 transition-colors group-hover:bg-monac-paper">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
              </div>
              <div className="ml-4 h-2 w-24 bg-monac-ink/5 rounded-full"></div>
            </div>

            {/* Conteúdo Abstrato Interativo */}
            <div className="p-6 grid grid-cols-3 gap-6 h-full relative">
              {/* Sidebar Simulada */}
              <div className="col-span-1 space-y-3 border-r border-monac-ink/5 pr-4">
                {/* Indicador da aba ativa na sidebar */}
                <div className="h-8 w-full bg-monac-ink/5 rounded-lg flex items-center px-2 relative overflow-hidden transition-all group-hover:bg-monac-ink/10">
                  <motion.div
                    layoutId="sidebar-accent"
                    className={`w-1.5 h-4 rounded absolute left-2 ${current.accentColor}`}
                  />
                </div>
                <div className="h-2 w-3/4 bg-monac-ink/5 rounded-full mt-4 opacity-60"></div>
                <div className="h-2 w-1/2 bg-monac-ink/5 rounded-full opacity-60"></div>
                <div className="h-2 w-2/3 bg-monac-ink/5 rounded-full opacity-60"></div>

                <div className="mt-8 h-20 w-full bg-monac-ink/5 rounded-lg opacity-40"></div>
              </div>

              {/* Área Principal (Dados e Gráfico) */}
              <div className="col-span-2 flex flex-col gap-4">
                {/* Métrica Principal com Animação na Troca */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab} // A chave muda, forçando a animação
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-between items-end mb-2"
                  >
                    <div>
                      <div className="text-[10px] uppercase text-monac-ink/40 font-bold">
                        {current.metricTitle}
                      </div>
                      <div className="text-2xl font-bold text-monac-ink">
                        {current.metricValue}
                      </div>
                    </div>
                    <div
                      className={`text-xs font-bold px-2 py-1 rounded ${activeTab === "estoque" ? "bg-amber-100 text-amber-600" : "bg-green-50 text-green-500"}`}
                    >
                      {current.growth}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Gráfico Simulado (Barras Animadas) */}
                <div className="flex-1 bg-monac-paper/30 rounded-xl border border-monac-ink/5 relative overflow-hidden flex items-end px-4 pb-0 pt-8 gap-2 group-hover:border-monac-ink/10 transition-colors">
                  {current.chartHeights.map((height, index) => (
                    <motion.div
                      key={`${activeTab}-${index}`}
                      initial={{ height: "10%" }}
                      animate={{ height: height }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                      }}
                      className={`w-full rounded-t-sm relative ${index === 3 ? `${current.accentColor} shadow-lg` : "bg-monac-ink/10"}`}
                    >
                      {index === 3 && (
                        <div
                          className={`absolute inset-0 bg-white/20 animate-pulse`}
                        ></div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Placeholder de widgets inferiores */}
                <div className="grid grid-cols-2 gap-4 mt-2 opacity-50">
                  <div className="h-12 bg-monac-paper/50 rounded-lg border border-monac-ink/5"></div>
                  <div className="h-12 bg-monac-paper/50 rounded-lg border border-monac-ink/5"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- CARDS FLUTUANTES INTERATIVOS --- */}
          <AnimatePresence mode="wait">
            {/* Card Flutuante 1 (Superior Direito) */}
            <motion.div
              key={`card1-${activeTab}`}
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 20, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute top-28 -right-4 lg:-right-12 bg-white p-4 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-monac-ink/5 flex items-center gap-3 z-30"
            >
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${current.card1.bg} ${current.card1.color}`}
              >
                <current.card1.icon size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-monac-ink/40 uppercase">
                  {current.card1.title}
                </div>
                <div className="text-sm font-bold text-monac-ink whitespace-nowrap">
                  {current.card1.value}
                </div>
              </div>
            </motion.div>

            {/* Card Flutuante 2 (Inferior Esquerdo) */}
            <motion.div
              key={`card2-${activeTab}`}
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -20, y: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute bottom-12 -left-4 lg:-left-8 bg-white p-4 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-monac-ink/5 flex items-center gap-3 z-30"
            >
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${current.card2.bg} ${current.card2.color}`}
              >
                <current.card2.icon size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-monac-ink/40 uppercase">
                  {current.card2.title}
                </div>
                <div className="text-sm font-bold text-monac-ink whitespace-nowrap">
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
