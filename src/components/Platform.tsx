import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  FileCheck,
  Smartphone,
  Package,
  ArrowRight,
  TrendingUp,
  QrCode,
  AlertTriangle,
} from "lucide-react";

const features = [
  {
    id: "financeiro",
    icon: Wallet,
    title: "Financeiro Blindado",
    desc: "Pare de perder dinheiro. Conciliação bancária automática, DRE em tempo real e controle rigoroso de fluxo de caixa.",
    color: "bg-indigo-600 dark:bg-indigo-500",
    lightColor: "bg-indigo-100 dark:bg-indigo-500/20",
    textColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "fiscal",
    icon: FileCheck,
    title: "Emissor Fiscal 100%",
    desc: "NF-e, NFC-e, MDF-e. Tudo emitido em segundos, calculado automaticamente e enviado para a contabilidade.",
    color: "bg-emerald-600 dark:bg-emerald-500",
    lightColor: "bg-emerald-100 dark:bg-emerald-500/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "estoque",
    icon: Package,
    title: "Estoque Inteligente",
    desc: "Evite furos e prejuízos. Controle de lote, validade, grade de cor/tamanho e alerta de estoque mínimo.",
    color: "bg-amber-600 dark:bg-amber-500",
    lightColor: "bg-amber-100 dark:bg-amber-500/20",
    textColor: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Gestão Mobile",
    desc: "Sua empresa no bolso. Acompanhe vendas, autorize descontos e veja relatórios pelo celular.",
    color: "bg-blue-600 dark:bg-blue-500",
    lightColor: "bg-blue-100 dark:bg-blue-500/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
];

export function Platform() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeFeature]);

  return (
    <section className="py-24 bg-white dark:bg-[#0a1017] border-t border-monac-ink/5 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="section-label">Plataforma</span>
          <h2 className="section-title mb-4">
            Poder de gigante.
            <br />
            Simplicidade de app.
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Uma plataforma completa que substitui meia dúzia de ferramentas
            desconectadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border relative overflow-hidden group ${
                  activeFeature === index
                    ? "bg-monac-paper dark:bg-white/5 border-monac-blue/20 dark:border-white/10 shadow-sm"
                    : "bg-white dark:bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                }`}
              >
                {activeFeature === index && (
                  <motion.div
                    layoutId="active-pill"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 ${feature.color.split(" ")[0]} dark:${feature.color.split(" ")[1]}`}
                  />
                )}
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${activeFeature === index ? `${feature.lightColor.split(" ")[0]} dark:${feature.lightColor.split(" ")[1]}` : "bg-gray-100 dark:bg-white/5"} transition-colors duration-300`}
                  >
                    <feature.icon
                      size={24}
                      className={
                        activeFeature === index
                          ? `${feature.textColor.split(" ")[0]} dark:${feature.textColor.split(" ")[1]}`
                          : "text-gray-400 dark:text-gray-500"
                      }
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg mb-1 ${activeFeature === index ? "text-monac-ink dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
                      style={{
                        fontFamily:
                          "'Century Gothic', Futura, 'Trebuchet MS', sans-serif",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400/80 leading-relaxed font-light"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 h-[500px] bg-gray-50 dark:bg-white/[0.02] rounded-3xl border border-gray-200 dark:border-white/5 relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                {activeFeature === 0 && <FinanceVisual />}
                {activeFeature === 1 && <FiscalVisual />}
                {activeFeature === 2 && <StockVisual />}
                {activeFeature === 3 && <MobileVisual />}
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-monac-ink/20 via-transparent to-transparent pointer-events-none opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinanceVisual() {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-[#1a202c] rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 overflow-hidden">
      <div className="p-6 bg-indigo-600 dark:bg-indigo-500 text-white">
        <div className="flex justify-between items-center mb-4">
          <span
            className="label-brand"
            style={{ color: "rgba(255,255,255,0.8)", marginBottom: 0 }}
          >
            Saldo Disponível
          </span>
          <Wallet size={20} className="opacity-80" />
        </div>
        <div
          className="text-3xl mb-2 text-white"
          style={{
            fontFamily: "'Glacial Indifference', Outfit, sans-serif",
            fontWeight: 400,
          }}
        >
          R$ 142.590,00
        </div>
        <div
          className="flex gap-2 text-xs font-medium bg-white/20 w-fit px-2 py-1 rounded-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <TrendingUp size={14} /> +12% vs. mês anterior
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-50 dark:border-white/5 pb-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
              <QrCode size={16} />
            </div>
            <div
              className="text-sm font-semibold text-gray-700 dark:text-white/80"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Recebimento Pix
            </div>
          </div>
          <span
            className="text-sm text-green-600 dark:text-green-400"
            style={{
              fontFamily: "'Glacial Indifference', Outfit, sans-serif",
              fontWeight: 400,
            }}
          >
            + R$ 1.250,00
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-50 dark:border-white/5 pb-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400">
              <ArrowRight size={16} />
            </div>
            <div
              className="text-sm font-semibold text-gray-700 dark:text-white/80"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Pagto. Fornecedor
            </div>
          </div>
          <span
            className="text-sm text-red-600 dark:text-red-400"
            style={{
              fontFamily: "'Glacial Indifference', Outfit, sans-serif",
              fontWeight: 400,
            }}
          >
            - R$ 4.300,00
          </span>
        </div>
        <div className="h-24 w-full bg-gray-50 dark:bg-white/5 rounded-lg flex items-end gap-1 p-2">
          {[30, 50, 40, 70, 50, 80, 60, 90].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.05 }}
              className="flex-1 bg-indigo-200 dark:bg-indigo-500/50 rounded-t-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FiscalVisual() {
  return (
    <div className="relative w-full max-w-sm flex flex-col items-center">
      <div className="w-64 h-8 bg-gray-800 dark:bg-gray-700 rounded-full shadow-2xl z-20"></div>
      <div className="w-60 h-4 bg-gray-700 dark:bg-gray-600 mx-auto -mt-2 z-10"></div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="bg-white dark:bg-[#1a202c] w-56 p-6 shadow-xl border-x border-b border-gray-200 dark:border-white/10 text-xs font-mono text-gray-500 dark:text-gray-400 relative -top-2 z-0"
        style={{
          fontFamily: "'Glacial Indifference', Outfit, sans-serif",
          fontWeight: 400,
        }}
      >
        <div
          className="text-center font-bold text-gray-800 dark:text-white/90 mb-4 border-b border-dashed border-gray-300 dark:border-gray-600 pb-2"
          style={{ fontFamily: "'Century Gothic', Futura, sans-serif" }}
        >
          DANFE NFC-e
        </div>
        <div className="flex justify-between mb-1">
          <span>PRODUTO A</span>
          <span>10,00</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>PRODUTO B</span>
          <span>25,00</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>PRODUTO C</span>
          <span>15,00</span>
        </div>
        <div className="border-t border-dashed border-gray-300 dark:border-gray-600 my-2"></div>
        <div className="flex justify-between font-bold text-gray-800 dark:text-white/90 text-sm">
          <span>TOTAL</span>
          <span>R$ 50,00</span>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-8 w-full bg-gray-100 dark:bg-gray-800 opacity-50"></div>
        </div>
        <motion.div
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-green-500 text-green-500 px-4 py-2 font-bold uppercase rounded opacity-80 -rotate-12"
          style={{ fontFamily: "'Century Gothic', Futura, sans-serif" }}
        >
          Autorizada
        </motion.div>
      </motion.div>
    </div>
  );
}

function StockVisual() {
  return (
    <div className="w-full max-w-sm grid grid-cols-2 gap-4">
      <div className="bg-white dark:bg-[#1a202c] p-4 rounded-xl shadow-lg border border-gray-100 dark:border-white/10 flex flex-col items-center gap-2">
        <div className="h-12 w-12 bg-amber-100 dark:bg-amber-500/20 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 mb-2">
          <Package size={24} />
        </div>
        <span
          className="text-sm font-semibold text-gray-700 dark:text-white/80"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Cimento CP-II
        </span>
        <span
          className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Estoque Cheio
        </span>
        <span
          className="text-xs text-green-600 dark:text-green-400"
          style={{
            fontFamily: "'Glacial Indifference', Outfit, sans-serif",
            fontWeight: 400,
          }}
        >
          400 un
        </span>
      </div>
      <div className="bg-white dark:bg-[#1a202c] p-4 rounded-xl shadow-lg border border-gray-100 dark:border-white/10 flex flex-col items-center gap-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-50 dark:bg-red-500/5 animate-pulse"></div>
        <div className="h-12 w-12 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-2 relative z-10">
          <AlertTriangle size={24} />
        </div>
        <span
          className="text-sm font-semibold text-gray-700 dark:text-white/80 relative z-10"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Tinta Acrílica
        </span>
        <span
          className="text-xs font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-500/10 px-2 py-1 rounded relative z-10"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Repor Agora
        </span>
        <span
          className="text-xs text-red-600 dark:text-red-400 relative z-10"
          style={{
            fontFamily: "'Glacial Indifference', Outfit, sans-serif",
            fontWeight: 400,
          }}
        >
          2 un
        </span>
      </div>
      <div className="col-span-2 bg-white dark:bg-[#1a202c] p-4 rounded-xl shadow-lg border border-gray-100 dark:border-white/10">
        <div
          className="label-brand text-gray-400 dark:text-gray-500 mb-2"
          style={{ marginBottom: "0.5rem" }}
        >
          Histórico de Movimentação
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              className="h-full bg-amber-500 rounded-full"
            ></motion.div>
          </div>
          <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ delay: 0.1 }}
              className="h-full bg-amber-400 dark:bg-amber-600 rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative w-[200px] h-[400px] bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden">
      <div className="w-full h-full bg-white dark:bg-gray-900 relative flex flex-col">
        <div className="h-14 bg-monac-blue dark:bg-monac-blue/80 w-full flex items-center justify-center pt-4 border-b border-monac-blue/20">
          <span
            className="text-white text-xs font-bold"
            style={{ fontFamily: "'Century Gothic', Futura, sans-serif" }}
          >
            Monac App
          </span>
        </div>
        <div className="p-4 space-y-3 flex-1 bg-gray-50 dark:bg-[#0a1017]">
          <div className="bg-white dark:bg-[#1a202c] p-3 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
            <div
              className="label-brand text-gray-400 dark:text-gray-500"
              style={{ marginBottom: "4px" }}
            >
              Vendas Hoje
            </div>
            <div
              className="text-xl text-gray-800 dark:text-white/90"
              style={{
                fontFamily: "'Glacial Indifference', Outfit, sans-serif",
                fontWeight: 400,
              }}
            >
              R$ 4.200
            </div>
          </div>
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-3 p-2 bg-white dark:bg-[#1a202c] rounded-lg border border-gray-100 dark:border-white/5"
            >
              <div className="h-8 w-8 bg-blue-50 dark:bg-blue-500/10 rounded-full border border-blue-100 dark:border-blue-500/20"></div>
              <div className="flex-1">
                <div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                <div className="h-2 w-24 bg-gray-100 dark:bg-gray-800 rounded"></div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="h-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex justify-around items-center px-4">
          <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50"></div>
          <div className="h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-800"></div>
          <div className="h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
}
