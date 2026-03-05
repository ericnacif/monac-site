import { Check, ArrowRight, Star, Zap, Building } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "./AnimatedTitle";

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
    buttonStyle: "btn-monac-outline",
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
    highlight: true,
    buttonStyle: "btn-monac-primary",
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
    buttonStyle:
      "bg-monac-ink dark:bg-white text-white dark:text-monac-ink hover:bg-black dark:hover:bg-gray-200 rounded-xl h-12 px-8 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 w-full",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-monac-paper dark:bg-monac-ink/95 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Investimento</span>

          <AnimatedTitle className="section-title mb-6">
            Escolha o plano ideal para o seu momento.
          </AnimatedTitle>

          <p className="section-subtitle">
            Transparência total. Sem taxas escondidas de implantação surpresa.
          </p>
        </div>

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
                  ? "bg-white dark:bg-white/5 border-2 border-monac-blue shadow-2xl scale-105 z-10"
                  : "bg-white dark:bg-white/[0.02] border border-monac-ink/5 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:border-white/10 transition-shadow"
              }`}
            >
              {plan.highlight && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-monac-blue text-white px-4 py-1 rounded-full shadow-md"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Mais Escolhido
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${plan.highlight ? "bg-monac-blue/10 text-monac-blue" : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400"}`}
                >
                  <plan.icon size={20} />
                </div>
                <h3
                  className="text-xl font-bold text-monac-ink dark:text-white"
                  style={{
                    fontFamily:
                      "'Century Gothic', Futura, 'Trebuchet MS', sans-serif",
                  }}
                >
                  {plan.name}
                </h3>
              </div>

              <div className="mb-2">
                <span
                  className="text-3xl text-monac-ink dark:text-white"
                  style={{
                    fontFamily: "'Glacial Indifference', Outfit, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-sm text-monac-ink/50 dark:text-white/50 font-light ml-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {plan.period}
                </span>
              </div>

              <p
                className="label-brand text-monac-blue dark:text-[#4d8eff] mb-6"
                style={{ marginBottom: "1.5rem" }}
              >
                {plan.target}
              </p>

              <p
                className="text-sm text-monac-ink/60 dark:text-white/60 leading-relaxed mb-8 min-h-[60px] font-light"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
              >
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-monac-ink/80 dark:text-white/80 font-light"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <Check
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-monac-blue" : "text-gray-400 dark:text-gray-500"}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.highlight ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open("https://wa.me/5533997088999", "_blank")
                  }
                  className="btn-monac-primary w-full"
                >
                  {plan.cta} <ArrowRight size={14} />
                </motion.button>
              ) : index === 2 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open("https://wa.me/5533997088999", "_blank")
                  }
                  className={plan.buttonStyle}
                >
                  {plan.cta} <ArrowRight size={14} />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open("https://wa.me/5533997088999", "_blank")
                  }
                  className="btn-monac-outline w-full"
                >
                  {plan.cta} <ArrowRight size={14} />
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-monac-ink/5 dark:border-white/5 pt-8">
          <p
            className="text-sm text-monac-ink/50 dark:text-white/50 font-light"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Precisa de uma negociação especial para rede de lojas?{" "}
            <a
              href="https://wa.me/5533997088999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-monac-blue dark:text-[#4d8eff] font-semibold hover:underline"
            >
              Fale com nossa diretoria.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
