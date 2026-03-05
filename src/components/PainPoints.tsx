import {
  FileSpreadsheet,
  AlertOctagon,
  TrendingDown,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "./AnimatedTitle";

const pains = [
  {
    icon: FileSpreadsheet,
    title: "Quero sair das Planilhas",
    problem:
      "Você nunca tem certeza se os dados estão certos. O estoque fura, o financeiro não bate e você perde horas conferindo células.",
    solution:
      "Centralize tudo. O Monac elimina o erro humano e automatiza o fluxo de dados.",
    stat: "Erros operacionais",
    statValue: "-90%",
  },
  {
    icon: AlertOctagon,
    title: "Sistema Atual é Lento",
    problem:
      "Seu software trava na hora da venda, o suporte demora dias para responder e a interface parou nos anos 2000.",
    solution:
      "Tecnologia moderna. O Monac roda no navegador, é rápido e tem suporte que resolve.",
    stat: "Produtividade",
    statValue: "+4h/dia",
  },
  {
    icon: TrendingDown,
    title: "Redução de Custos",
    problem:
      "Você vende bem, mas não vê a cor do dinheiro. Sem controle de margem e desperdícios, o lucro escorre pelo ralo.",
    solution:
      "Visão de Raio-X. Saiba exatamente onde cortar custos e onde investir.",
    stat: "Margem de Lucro",
    statValue: "+15%",
  },
];

export function PainPoints() {
  return (
    <section className="py-24 bg-monac-paper dark:bg-monac-ink border-y border-monac-ink/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Diagnóstico
          </motion.span>

          <AnimatedTitle className="section-title mb-6">
            Sua empresa cresceu.
            <br />
            Suas ferramentas não.
          </AnimatedTitle>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Chega um momento em que a improvisação começa a custar caro.
            Identifique o gargalo que está travando o seu crescimento hoje:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-monac p-8 hover:shadow-xl hover:shadow-monac-blue/5 dark:hover:shadow-monac-blue/10 group cursor-default relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-monac-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

              <div className="h-12 w-12 rounded-lg bg-monac-paper dark:bg-white/5 flex items-center justify-center text-monac-ink/50 dark:text-white/50 group-hover:bg-monac-blue group-hover:text-white transition-colors mb-6">
                <item.icon size={24} />
              </div>

              <h3
                className="text-xl font-bold text-monac-ink dark:text-white mb-3 group-hover:text-monac-blue dark:group-hover:text-[#4d8eff] transition-colors"
                style={{
                  fontFamily:
                    "'Century Gothic', Futura, 'Trebuchet MS', sans-serif",
                }}
              >
                {item.title}
              </h3>

              <p className="text-sm text-monac-ink/60 dark:text-white/60 leading-relaxed mb-6 font-light">
                {item.problem}
              </p>

              <div className="h-px w-full bg-monac-ink/5 dark:bg-white/5 my-6"></div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-monac-blue dark:text-[#4d8eff] flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm font-medium text-monac-ink dark:text-white leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                <div className="bg-monac-paper dark:bg-white/5 rounded-lg p-3 flex justify-between items-center group-hover:bg-monac-blue/5 dark:group-hover:bg-white/10 transition-colors">
                  <span
                    className="label-brand text-monac-ink/40 dark:text-white/40"
                    style={{ marginBottom: 0 }}
                  >
                    {item.stat}
                  </span>
                  <span
                    className="text-sm text-monac-blue dark:text-[#4d8eff]"
                    style={{
                      fontFamily: "'Glacial Indifference', Outfit, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {item.statValue}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
