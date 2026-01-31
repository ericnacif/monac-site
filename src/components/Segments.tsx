import { useState } from "react";
import {
  Store,
  Factory,
  Building2,
  Wrench,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const segments = [
  {
    id: "varejo",
    icon: Store,
    title: "Varejo e Comércio",
    subtitle: "Para quem precisa de velocidade no balcão.",
    description:
      "Não deixe seu cliente esperando. O módulo de varejo foca em um PDV ultra-rápido, emissão de NFC-e em segundos e controle de estoque de alto giro.",
    features: [
      "Frente de Caixa (PDV) Offline",
      "Emissão de NFC-e e SAT",
      "Controle de Grade (Cor e Tamanho)",
      "Integração com Balanças e Leitores",
    ],
  },
  {
    id: "industria",
    icon: Factory,
    title: "Indústrias e Fábricas",
    subtitle: "Transforme insumos em lucro organizado.",
    description:
      "Tenha controle total do chão de fábrica. Saiba exatamente quanto custa produzir cada item, controle a quebra de insumos e gerencie ordens de produção.",
    features: [
      "Ordem de Produção (OP)",
      "Ficha Técnica de Produtos",
      "Cálculo Automático de Custo",
      "Baixa de Insumos Integrada",
    ],
  },
  {
    id: "distribuicao",
    icon: Building2,
    title: "Distribuidoras",
    subtitle: "Logística afiada e estoque preciso.",
    description:
      "Evite erros na entrega. Gerencie lotes, validades e organize a separação de mercadorias com inteligência logística.",
    features: [
      "Controle de Lotes e Validade",
      "Romaneios de Carga",
      "App de Separação (Picking)",
      "Tabelas de Preço por Região",
    ],
  },
  {
    id: "servicos",
    icon: Wrench,
    title: "Prestadores de Serviço",
    subtitle: "Contratos e recorrência sem dor de cabeça.",
    description:
      "Ideal para quem vende horas ou contratos. Gerencie sua equipe técnica e automatize o faturamento mensal de clientes recorrentes.",
    features: [
      "Ordens de Serviço (OS)",
      "Contratos de Recorrência",
      "Emissão de NFS-e Automática",
      "Agenda de Técnicos",
    ],
  },
];

export function Segments() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-monac-blue mb-4 block">
            Segmentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-monac-ink mb-6">
            Uma plataforma, múltiplas especialidades.
          </h2>
          <p className="text-monac-ink/60 text-lg">
            O Monac não é genérico. Ativamos módulos específicos baseados na
            realidade do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* MENU LATERAL (Navegação) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {segments.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`text-left p-6 rounded-xl transition-all duration-300 border group relative overflow-hidden ${
                  activeTab === index
                    ? "bg-monac-blue text-white border-monac-blue shadow-lg shadow-monac-blue/20"
                    : "bg-white text-monac-ink hover:bg-monac-paper border-transparent hover:border-monac-ink/5"
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <item.icon
                    size={24}
                    className={
                      activeTab === index
                        ? "text-white"
                        : "text-monac-ink/40 group-hover:text-monac-blue"
                    }
                  />
                  <span className="font-bold text-sm uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* CONTEÚDO DINÂMICO (Direita) */}
          <div className="lg:col-span-8 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-monac-paper rounded-2xl p-8 md:p-12 border border-monac-ink/5"
              >
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  {/* Texto do Segmento */}
                  <div className="flex-1 space-y-6">
                    <div className="h-14 w-14 rounded-full bg-monac-blue/10 flex items-center justify-center text-monac-blue mb-2">
                      {(() => {
                        const Icon = segments[activeTab].icon;
                        return <Icon size={28} />;
                      })()}
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-monac-ink mb-2">
                        {segments[activeTab].title}
                      </h3>
                      <p className="text-monac-blue font-medium text-sm md:text-base">
                        {segments[activeTab].subtitle}
                      </p>
                    </div>

                    <p className="text-monac-ink/70 leading-relaxed">
                      {segments[activeTab].description}
                    </p>

                    <ul className="space-y-3 pt-4">
                      {segments[activeTab].features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm font-medium text-monac-ink"
                        >
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6">
                      <button
                        onClick={() =>
                          window.open("https://wa.me/5533999999999", "_blank")
                        }
                        className="text-xs font-bold uppercase tracking-widest text-monac-blue hover:text-monac-darkBlue flex items-center gap-2 group"
                      >
                        Ver funcionalidades de {segments[activeTab].title}
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Ilustração Abstrata (Card Visual) */}
                  <div className="hidden md:block w-72 h-72 bg-white rounded-xl shadow-lg border border-monac-ink/5 p-6 rotate-3">
                    <div className="h-full flex flex-col justify-between opacity-50">
                      <div className="space-y-4">
                        <div className="h-4 w-1/3 bg-monac-ink/10 rounded-full"></div>
                        <div className="h-2 w-full bg-monac-ink/5 rounded-full"></div>
                        <div className="h-2 w-full bg-monac-ink/5 rounded-full"></div>
                        <div className="h-2 w-2/3 bg-monac-ink/5 rounded-full"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-16 w-full bg-monac-blue/5 rounded-lg border border-monac-blue/10"></div>
                        <div className="h-16 w-full bg-monac-blue/5 rounded-lg border border-monac-blue/10"></div>
                      </div>
                    </div>
                    {/* Badge Flutuante */}
                    <div className="absolute -bottom-4 -right-4 bg-monac-ink text-white px-4 py-2 rounded-lg text-xs font-bold shadow-xl">
                      Módulo Ativo
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
