import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { openWhatsApp } from "../config";

interface ComparisonRow {
  feature: string;
  before: string | false;
  after: string | true;
}

const rows: ComparisonRow[] = [
  { feature: "Emissão de NF-e", before: "Sistema separado, lento e caro", after: true },
  { feature: "Controle de estoque", before: "Planilha manual com erros", after: true },
  { feature: "Fluxo de caixa", before: "Excel desatualizado", after: true },
  { feature: "Relatórios gerenciais", before: "Horas montando no final do mês", after: true },
  { feature: "Acesso mobile", before: false, after: true },
  { feature: "Suporte humano e rápido", before: "Ticket aberto, sem retorno", after: true },
  { feature: "Integração fiscal automática", before: false, after: true },
  { feature: "Custo total mensal", before: "3 sistemas + contador extra", after: "Um só lugar" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-28 bg-white dark:bg-monac-ink overflow-hidden"
      aria-label="Comparativo Monac vs sistema antigo"
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 bg-tech-grid opacity-50 dark:opacity-20" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-monac-ink/10 dark:via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Cabeçalho */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">Por que Monac?</span>
          <h2 className="section-title mb-4">
            Antes e depois.
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Veja a diferença entre improvisar com ferramentas separadas e operar com um sistema feito para crescer.
          </p>
        </motion.div>

        {/* Tabela comparativa */}
        <div className="rounded-3xl overflow-hidden border border-monac-ink/8 dark:border-white/10 shadow-2xl">

          {/* Header da tabela */}
          <div className="grid grid-cols-3 bg-monac-paper dark:bg-monac-ink/50 border-b border-monac-ink/8 dark:border-white/10">
            <div className="p-5 pl-6">
              <span
                className="text-xs font-semibold text-monac-ink/40 dark:text-white/30 uppercase tracking-widest"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Funcionalidade
              </span>
            </div>
            <div className="p-5 border-l border-monac-ink/8 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" aria-hidden="true" />
                <span
                  className="text-xs font-semibold text-monac-ink/50 dark:text-white/40 uppercase tracking-widest"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Sistema Antigo
                </span>
              </div>
            </div>
            <div className="p-5 border-l border-monac-blue/20 bg-monac-blue/5 dark:bg-monac-blue/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-monac-blue" aria-hidden="true" />
                <span
                  className="text-xs font-bold text-monac-blue uppercase tracking-widest"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Monac ERP ™
                </span>
              </div>
            </div>
          </div>

          {/* Linhas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {rows.map((row, i) => (
              <motion.div
                key={i}
                variants={rowVariants}
                className={`grid grid-cols-3 border-b border-monac-ink/5 dark:border-white/5 last:border-b-0 group hover:bg-monac-paper/50 dark:hover:bg-white/[0.02] transition-colors ${
                  i % 2 === 0 ? "bg-white dark:bg-transparent" : "bg-monac-paper/30 dark:bg-white/[0.02]"
                }`}
              >
                {/* Feature */}
                <div className="p-4 pl-6 flex items-center">
                  <span
                    className="text-sm font-medium text-monac-ink dark:text-white/80"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                  >
                    {row.feature}
                  </span>
                </div>

                {/* Antes */}
                <div className="p-4 border-l border-monac-ink/5 dark:border-white/5 flex items-center gap-2">
                  {row.before === false ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X size={12} className="text-red-500" aria-hidden="true" />
                      </div>
                      <span className="text-xs text-monac-ink/30 dark:text-white/25 font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Não disponível
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <X size={12} className="text-red-500" aria-hidden="true" />
                      </div>
                      <span className="text-xs text-monac-ink/50 dark:text-white/40 font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {row.before}
                      </span>
                    </div>
                  )}
                </div>

                {/* Depois */}
                <div className="p-4 border-l border-monac-blue/15 bg-monac-blue/[0.03] dark:bg-monac-blue/[0.06] flex items-center gap-2">
                  {row.after === true ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-green-600" strokeWidth={3} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-monac-ink dark:text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Incluído
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-monac-blue/10 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-monac-blue" strokeWidth={3} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-monac-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {row.after}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer da tabela — CTA */}
          <div className="grid grid-cols-3 bg-monac-paper dark:bg-monac-ink/50 border-t border-monac-ink/8 dark:border-white/10">
            <div className="p-6 pl-6 flex items-center">
              <span className="text-sm font-semibold text-monac-ink/60 dark:text-white/40" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Resultado
              </span>
            </div>
            <div className="p-6 border-l border-monac-ink/8 dark:border-white/10 flex items-center">
              <span className="text-sm text-red-500/80 font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Caos, custos e retrabalho
              </span>
            </div>
            <div className="p-6 border-l border-monac-blue/20 bg-monac-blue/5 dark:bg-monac-blue/10 flex items-center justify-between gap-4">
              <span className="text-sm font-bold text-monac-blue" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Controle total
              </span>
              <button
                onClick={() => openWhatsApp("Olá! Quero conhecer o Monac ERP.")}
                className="btn-monac-primary text-xs px-4 h-9 whitespace-nowrap flex-shrink-0"
                aria-label="Começar a usar o Monac ERP"
              >
                Começar <ArrowRight size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
