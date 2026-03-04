import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { TrendingUp, Clock, Shield, Zap } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  color: string;
  bgColor: string;
}

const stats: StatItem[] = [
  {
    icon: TrendingUp,
    value: 90,
    suffix: "%",
    label: "Menos erros operacionais",
    sublabel: "com automação de processos",
    color: "text-emerald-500 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-400/10",
  },
  {
    icon: Clock,
    value: 4,
    suffix: "h",
    label: "Economizadas por dia",
    sublabel: "em média por gestor",
    color: "text-monac-blue",
    bgColor: "bg-monac-blue/10",
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: "%",
    label: "Aumento na margem",
    sublabel: "com visão de custos real",
    color: "text-amber-500 dark:text-amber-400",
    bgColor: "bg-amber-500/10 dark:bg-amber-400/10",
  },
  {
    icon: Zap,
    value: 30,
    suffix: "s",
    label: "Para emitir uma NF-e",
    sublabel: "do zero até autorizada",
    color: "text-violet-500 dark:text-violet-400",
    bgColor: "bg-violet-500/10 dark:bg-violet-400/10",
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: "Compliance fiscal",
    sublabel: "sempre atualizado",
    color: "text-cyan-500 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10 dark:bg-cyan-400/10",
  },
];

function AnimatedCounter({
  value,
  suffix,
  prefix = "",
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// Tipagem rigorosa para evitar o erro de widen do array numérico
const cinematicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: cinematicEase },
  },
};

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-28 overflow-hidden bg-white dark:bg-monac-ink"
      aria-label="Métricas de impacto"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(16,24,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,24,32,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,71,187,0.05),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,71,187,0.15),transparent)]"
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-monac-blue/20 dark:via-monac-blue/50 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: cinematicEase }}
          className="text-center mb-20"
        >
          <span className="label-brand text-monac-blue">Impacto Real</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-monac-ink dark:text-white mt-2 mb-4"
            style={{
              fontFamily:
                "'Century Gothic', Futura, 'Trebuchet MS', sans-serif",
            }}
          >
            Números que provam.
          </h2>
          <p
            className="text-monac-ink/60 dark:text-white/50 text-lg max-w-xl mx-auto font-light"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Resultados médios observados em empresas que migraram para o Monac
            ERP.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-monac-ink/[0.02] dark:bg-white/[0.04] border border-monac-ink/5 dark:border-white/[0.08] rounded-2xl p-6 text-center hover:bg-monac-ink/[0.05] dark:hover:bg-white/[0.08] hover:border-monac-ink/15 dark:hover:border-white/20 transition-all duration-300 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon
                  size={22}
                  className={stat.color.split(" ")[0]}
                  aria-hidden="true"
                />
              </div>

              <div
                className={`text-4xl font-normal mb-2 ${stat.color.split(" ")[0]} dark:${stat.color.split(" ")[1] || stat.color}`}
                style={{
                  fontFamily: "'Glacial Indifference', Outfit, sans-serif",
                  fontWeight: 400,
                }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>

              <div
                className="text-monac-ink dark:text-white font-semibold text-sm mb-1"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
              >
                {stat.label}
              </div>
              <div
                className="text-monac-ink/60 dark:text-white/40 text-xs font-light leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
              >
                {stat.sublabel}
              </div>

              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 ${stat.bgColor.split(" ")[0]} dark:${stat.bgColor.split(" ")[1] || stat.bgColor} group-hover:w-1/2 transition-all duration-500 rounded-full`}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-monac-ink/30 dark:text-white/25 text-xs mt-10 font-light"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          * Dados baseados em projeções e benchmarks do setor de ERP para PMEs
          brasileiras.
        </motion.p>
      </div>
    </section>
  );
}
