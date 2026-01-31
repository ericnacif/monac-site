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
    color: "bg-indigo-600",
    lightColor: "bg-indigo-100",
    textColor: "text-indigo-600",
  },
  {
    id: "fiscal",
    icon: FileCheck,
    title: "Emissor Fiscal 100%",
    desc: "NF-e, NFC-e, MDF-e. Tudo emitido em segundos, calculado automaticamente e enviado para a contabilidade.",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-100",
    textColor: "text-emerald-600",
  },
  {
    id: "estoque",
    icon: Package,
    title: "Estoque Inteligente",
    desc: "Evite furos e prejuízos. Controle de lote, validade, grade de cor/tamanho e alerta de estoque mínimo.",
    color: "bg-amber-600",
    lightColor: "bg-amber-100",
    textColor: "text-amber-600",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Gestão Mobile",
    desc: "Sua empresa no bolso. Acompanhe vendas, autorize descontos e veja relatórios pelo celular.",
    color: "bg-blue-600",
    lightColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
];

export function Platform() {
  const [activeFeature, setActiveFeature] = useState(0);

  // Lógica de Autoplay Inteligente
  useEffect(() => {
    // Inicia o timer
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 10000); // CORREÇÃO: Aumentado para 10 segundos

    // Limpeza: Toda vez que o 'activeFeature' muda (seja por clique ou timer),
    // o timer anterior é destruído e um novo começa do zero.
    return () => clearInterval(interval);
  }, [activeFeature]);

  return (
    <section className="py-24 bg-white border-t border-monac-ink/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-monac-ink mb-4">
            Poder de gigante.
            <br /> Simplicidade de app.
          </h2>
          <p className="text-monac-ink/60 max-w-2xl mx-auto">
            Uma plataforma completa que substitui meia dúzia de ferramentas
            desconectadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* MENU LATERAL (Navegação) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border relative overflow-hidden group ${
                  activeFeature === index
                    ? "bg-monac-paper border-monac-blue/20 shadow-sm"
                    : "bg-white border-transparent hover:bg-gray-50"
                }`}
              >
                {/* Barra de Progresso Lateral (Só aparece no ativo) */}
                {activeFeature === index && (
                  <motion.div
                    layoutId="active-pill"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 ${feature.color}`}
                  />
                )}

                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${activeFeature === index ? feature.lightColor : "bg-gray-100"} transition-colors duration-300`}
                  >
                    <feature.icon
                      size={24}
                      className={
                        activeFeature === index
                          ? feature.textColor
                          : "text-gray-400"
                      }
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg mb-1 ${activeFeature === index ? "text-monac-ink" : "text-gray-500"}`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ÁREA DE VISUALIZAÇÃO (O Palco) */}
          <div className="lg:col-span-7 h-[500px] bg-gray-50 rounded-3xl border border-gray-200 relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                {/* Renderiza o conteúdo visual baseado na feature ativa */}
                {activeFeature === 0 && <FinanceVisual />}
                {activeFeature === 1 && <FiscalVisual />}
                {activeFeature === 2 && <StockVisual />}
                {activeFeature === 3 && <MobileVisual />}
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay para integrar com o fundo */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent pointer-events-none opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- VISUALIZADORES (Sub-componentes Visuais) ---

function FinanceVisual() {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 bg-indigo-600 text-white">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold uppercase opacity-80">
            Saldo Disponível
          </span>
          <Wallet size={20} className="opacity-80" />
        </div>
        <div className="text-3xl font-bold tracking-tight mb-2">
          R$ 142.590,00
        </div>
        <div className="flex gap-2 text-xs font-medium bg-white/20 w-fit px-2 py-1 rounded-lg">
          <TrendingUp size={14} /> +12% vs. mês anterior
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-50 pb-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <QrCode size={16} />
            </div>
            <div className="text-sm font-bold text-gray-700">
              Recebimento Pix
            </div>
          </div>
          <span className="text-sm font-bold text-green-600">
            + R$ 1.250,00
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-50 pb-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">
              <ArrowRight size={16} />
            </div>
            <div className="text-sm font-bold text-gray-700">
              Pagto. Fornecedor
            </div>
          </div>
          <span className="text-sm font-bold text-red-600">- R$ 4.300,00</span>
        </div>
        <div className="h-24 w-full bg-gray-50 rounded-lg flex items-end gap-1 p-2">
          {[30, 50, 40, 70, 50, 80, 60, 90].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.05 }}
              className="flex-1 bg-indigo-200 rounded-t-sm"
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
      {/* Impressora Abstrata */}
      <div className="w-64 h-8 bg-gray-800 rounded-full shadow-2xl z-20"></div>
      <div className="w-60 h-4 bg-gray-700 mx-auto -mt-2 z-10"></div>

      {/* Nota Fiscal Saindo */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="bg-white w-56 p-6 shadow-xl border-x border-b border-gray-200 text-xs font-mono text-gray-500 relative -top-2 z-0"
      >
        <div className="text-center font-bold text-gray-800 mb-4 border-b border-dashed border-gray-300 pb-2">
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
        <div className="border-t border-dashed border-gray-300 my-2"></div>
        <div className="flex justify-between font-bold text-gray-800 text-sm">
          <span>TOTAL</span>
          <span>R$ 50,00</span>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-8 w-full bg-gray-100 opacity-50"></div>
        </div>

        {/* Carimbo de Sucesso */}
        <motion.div
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-green-500 text-green-500 px-4 py-2 font-bold uppercase rounded opacity-80 -rotate-12"
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
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center gap-2">
        <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-2">
          <Package size={24} />
        </div>
        <span className="text-sm font-bold text-gray-700">Cimento CP-II</span>
        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
          Estoque Cheio (400 un)
        </span>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center gap-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-50 animate-pulse"></div>
        <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2 relative z-10">
          <AlertTriangle size={24} />
        </div>
        <span className="text-sm font-bold text-gray-700 relative z-10">
          Tinta Acrílica
        </span>
        <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded relative z-10">
          Repor Agora (2 un)
        </span>
      </div>

      <div className="col-span-2 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
        <div className="text-xs font-bold uppercase text-gray-400 mb-2">
          Histórico de Movimentação
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              className="h-full bg-amber-500 rounded-full"
            ></motion.div>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ delay: 0.1 }}
              className="h-full bg-amber-400 rounded-full"
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
      {/* Tela do Celular */}
      <div className="w-full h-full bg-white relative flex flex-col">
        <div className="h-14 bg-blue-600 w-full flex items-center justify-center pt-4">
          <span className="text-white text-xs font-bold">Monac App</span>
        </div>

        <div className="p-4 space-y-3 flex-1 bg-gray-50">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
            <div className="text-[10px] text-gray-400 font-bold uppercase">
              Vendas Hoje
            </div>
            <div className="text-xl font-bold text-gray-800">R$ 4.200</div>
          </div>

          {/* Lista de Notificações */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-3 p-2 bg-white rounded-lg border border-gray-100"
            >
              <div className="h-8 w-8 bg-blue-50 rounded-full border border-blue-100"></div>
              <div className="flex-1">
                <div className="h-2 w-16 bg-gray-200 rounded mb-1"></div>
                <div className="h-2 w-24 bg-gray-100 rounded"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Nav */}
        <div className="h-12 bg-white border-t border-gray-100 flex justify-around items-center px-4">
          <div className="h-6 w-6 rounded-full bg-blue-100"></div>
          <div className="h-6 w-6 rounded-full bg-gray-100"></div>
          <div className="h-6 w-6 rounded-full bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
