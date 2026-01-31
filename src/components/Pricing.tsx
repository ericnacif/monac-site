import { Check, ArrowRight, Star, Zap, Building } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Start",
    icon: Zap,
    target: "Comércio e Pequenos Negócios",
    price: "R$ 199,90",
    period: "/mês",
    description:
      "O essencial para vender rápido, emitir notas e organizar o estoque sem complicações.",
    features: [
      "Emissor de NF-e e NFC-e Ilimitado",
      "Controle de Estoque Básico",
      "PDV Frente de Caixa (Offline)",
      "Cadastro de Clientes e Produtos",
      "Suporte via Chat",
    ],
    cta: "Começar Agora",
    highlight: false,
    buttonStyle:
      "border border-monac-ink/10 text-monac-ink hover:bg-monac-ink/5",
  },
  {
    name: "Pro",
    icon: Star,
    target: "Gestão Completa",
    price: "Sob Consulta",
    period: "",
    description:
      "Inteligência financeira, relatórios de performance e controle total para quem quer crescer.",
    features: [
      "Tudo do plano Start",
      "Gestão Financeira (Fluxo de Caixa)",
      "DRE Gerencial e Boletos",
      "Contas a Pagar e Receber",
      "Suporte Prioritário (WhatsApp)",
    ],
    cta: "Agendar Demonstração",
    highlight: true, // ESTE É O FOCO
    buttonStyle:
      "bg-monac-blue text-white hover:bg-monac-darkBlue shadow-lg shadow-monac-blue/20",
  },
  {
    name: "Enterprise",
    icon: Building,
    target: "Indústrias e Logística",
    price: "Sob Medida",
    period: "",
    description:
      "Módulos avançados de produção, logística e personalizações para operações complexas.",
    features: [
      "Tudo do plano Pro",
      "Ordem de Produção (OP)",
      "Gestão de Lotes e Validade",
      "App de Separação e Expedição",
      "Gerente de Conta Exclusivo",
    ],
    cta: "Falar com um Sócio",
    highlight: false,
    buttonStyle: "bg-monac-ink text-white hover:bg-black",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-monac-paper relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-monac-blue mb-4 block">
            Investimento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-monac-ink mb-6">
            Escolha o plano ideal para o seu momento.
          </h2>
          <p className="text-monac-ink/60 text-lg">
            Transparência total. Sem taxas escondidas de implantação surpresa.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full ${
                plan.highlight
                  ? "bg-white border-2 border-monac-blue shadow-2xl scale-105 z-10"
                  : "bg-white border border-monac-ink/5 shadow-sm hover:shadow-xl transition-shadow"
              }`}
            >
              {/* Badge de Recomendado (Só no Pro) */}
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-monac-blue text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                  Mais Escolhido
                </div>
              )}

              {/* Título e Ícone */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${plan.highlight ? "bg-monac-blue/10 text-monac-blue" : "bg-gray-100 text-gray-500"}`}
                >
                  <plan.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-monac-ink">
                  {plan.name}
                </h3>
              </div>

              {/* Preço */}
              <div className="mb-2">
                <span className="text-3xl font-bold text-monac-ink">
                  {plan.price}
                </span>
                <span className="text-sm text-monac-ink/50 font-medium">
                  {plan.period}
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-monac-blue mb-6">
                {plan.target}
              </p>

              <p className="text-sm text-monac-ink/60 leading-relaxed mb-8 min-h-[60px]">
                {plan.description}
              </p>

              {/* Lista de Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-monac-ink/80"
                  >
                    <Check
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-monac-blue" : "text-gray-400"}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botão de Ação */}
              <button
                onClick={() =>
                  window.open("https://wa.me/5533999999999", "_blank")
                }
                className={`w-full h-12 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 ${plan.buttonStyle}`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Rápido / Garantia */}
        <div className="mt-16 text-center border-t border-monac-ink/5 pt-8">
          <p className="text-sm text-monac-ink/50">
            Precisa de uma negociação especial para rede de lojas?{" "}
            <a href="#" className="text-monac-blue font-bold hover:underline">
              Fale com nossa diretoria.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
