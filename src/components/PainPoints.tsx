import {
  FileSpreadsheet,
  AlertOctagon,
  TrendingDown,
  CheckCircle2,
} from "lucide-react"; // Removi ArrowRight
import { motion } from "framer-motion";

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
    <section className="py-24 bg-monac-paper border-y border-monac-ink/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-widest text-monac-blue mb-4 block"
          >
            Diagnóstico
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-monac-ink mb-6"
          >
            Sua empresa cresceu.
            <br />
            Suas ferramentas não.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-monac-ink/60 text-lg leading-relaxed"
          >
            Chega um momento em que a improvisação começa a custar caro.
            Identifique o gargalo que está travando o seu crescimento hoje:
          </motion.p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-monac-ink/5 hover:border-monac-blue/30 hover:shadow-xl hover:shadow-monac-blue/5 transition-all group cursor-default relative overflow-hidden"
            >
              {/* Barra lateral colorida no hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-monac-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

              {/* Ícone */}
              <div className="h-12 w-12 rounded-lg bg-monac-paper flex items-center justify-center text-monac-ink/50 group-hover:bg-monac-blue group-hover:text-white transition-colors mb-6">
                <item.icon size={24} />
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-monac-ink mb-3 group-hover:text-monac-blue transition-colors">
                {item.title}
              </h3>

              {/* Problema (Texto Cinza) */}
              <p className="text-sm text-monac-ink/60 leading-relaxed mb-6">
                {item.problem}
              </p>

              {/* Divisor */}
              <div className="h-px w-full bg-monac-ink/5 my-6"></div>

              {/* Solução (Texto Forte) */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-monac-blue flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm font-medium text-monac-ink leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                {/* Stat de Impacto */}
                <div className="bg-monac-paper rounded-lg p-3 flex justify-between items-center group-hover:bg-monac-blue/5 transition-colors">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-monac-ink/40">
                    {item.stat}
                  </span>
                  <span className="text-sm font-bold text-monac-blue">
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
