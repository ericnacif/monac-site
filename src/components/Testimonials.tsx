import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  segment: string;
  avatar: string;
  quote: string;
  rating: number;
  metric: { value: string; label: string };
}

// Placeholders profissionais — substituir com dados reais quando disponíveis
const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendonça",
    role: "Proprietário",
    company: "Distribuidora Mendonça",
    segment: "Distribuidora",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Mendonca&background=0047BB&color=fff&size=96",
    quote: "Antes do Monac, eu passava horas todo dia conciliando planilhas que nunca batiam. Hoje vejo o fluxo de caixa em tempo real. É outra empresa.",
    rating: 5,
    metric: { value: "-4h", label: "por dia no financeiro" },
  },
  {
    name: "Ana Paula Rocha",
    role: "Gestora Comercial",
    company: "Varejo Rocha & Filhos",
    segment: "Varejo",
    avatar: "https://ui-avatars.com/api/?name=Ana+Paula+Rocha&background=059669&color=fff&size=96",
    quote: "A emissão de NF-e que levava 5 minutos agora sai em 30 segundos. Minha equipe de caixa não quer nem ouvir falar em voltar para o sistema antigo.",
    rating: 5,
    metric: { value: "30s", label: "para emitir NF-e" },
  },
  {
    name: "Roberto Figueiredo",
    role: "Diretor Industrial",
    company: "Figueiredo Manufatura",
    segment: "Indústria",
    avatar: "https://ui-avatars.com/api/?name=Roberto+Figueiredo&background=7C3AED&color=fff&size=96",
    quote: "Controlar ordens de produção no papel era caos. Com o Monac, sei exatamente o custo de cada produto e onde estão meus insumos em tempo real.",
    rating: 5,
    metric: { value: "+15%", label: "na margem bruta" },
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-white/20"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const navigate = (dir: number) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.97, transition: { duration: 0.3 } }),
  };

  const current = testimonials[active];

  return (
    <section
      className="relative py-28 bg-monac-paper dark:bg-monac-ink/80 overflow-hidden"
      aria-label="Depoimentos de clientes"
    >
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-monac-blue/30 to-transparent" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-monac-blue/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-monac-blue/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Cabeçalho */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title mb-4">
            Quem usa, recomenda.
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Histórias reais de gestores que transformaram seus negócios com o Monac.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Cards laterais (desktop) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-4">
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                whileHover={{ x: 4 }}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  i === active
                    ? "bg-white dark:bg-white/10 border-monac-blue/30 shadow-lg shadow-monac-blue/10"
                    : "bg-white/50 dark:bg-white/5 border-monac-ink/5 hover:border-monac-blue/20"
                }`}
                aria-label={`Ver depoimento de ${t.name}`}
                aria-pressed={i === active}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className={`w-10 h-10 rounded-full transition-all ${i === active ? "grayscale-0" : "grayscale opacity-60"}`}
                  />
                  <div>
                    <div className="text-sm font-semibold text-monac-ink dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{t.name}</div>
                    <div className="text-xs text-monac-ink/50 dark:text-white/40 font-light">{t.company}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Card principal */}
          <div className="lg:col-span-9 relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white dark:bg-white/5 border border-monac-ink/5 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
              >
                {/* Aspas decorativas */}
                <Quote
                  size={80}
                  className="absolute top-6 right-8 text-monac-blue/8 dark:text-monac-blue/15 rotate-180"
                  aria-hidden="true"
                />

                {/* Header do depoimento */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      loading="lazy"
                      className="w-16 h-16 rounded-full ring-2 ring-monac-blue/20"
                    />
                    <div>
                      <div
                        className="text-lg font-bold text-monac-ink dark:text-white"
                        style={{ fontFamily: "'Century Gothic', Futura, sans-serif" }}
                      >
                        {current.name}
                      </div>
                      <div className="text-sm text-monac-ink/60 dark:text-white/50 font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {current.role} · {current.company}
                      </div>
                      <StarRating rating={current.rating} />
                    </div>
                  </div>

                  {/* Métrica de impacto */}
                  <div className="bg-monac-blue/5 dark:bg-monac-blue/10 border border-monac-blue/15 rounded-2xl px-6 py-4 text-center min-w-[120px]">
                    <div
                      className="text-2xl text-monac-blue"
                      style={{ fontFamily: "'Glacial Indifference', Outfit, sans-serif", fontWeight: 400 }}
                    >
                      {current.metric.value}
                    </div>
                    <div className="text-xs text-monac-ink/50 dark:text-white/40 font-light mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {current.metric.label}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  className="text-xl md:text-2xl text-monac-ink/80 dark:text-white/80 leading-relaxed font-light relative z-10"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                >
                  "{current.quote}"
                </blockquote>

                {/* Tag de segmento */}
                <div className="mt-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full bg-monac-ink/5 dark:bg-white/10 text-monac-ink/50 dark:text-white/40"
                    style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    {current.segment}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navegação */}
            <div className="flex items-center justify-between mt-6">
              {/* Dots */}
              <div className="flex gap-2" role="tablist" aria-label="Navegação dos depoimentos">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Depoimento ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-8 bg-monac-blue" : "w-1.5 bg-monac-ink/20 dark:bg-white/20 hover:bg-monac-blue/50"
                    }`}
                  />
                ))}
              </div>

              {/* Setas */}
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(-1)}
                  aria-label="Depoimento anterior"
                  className="w-10 h-10 rounded-full border border-monac-ink/10 dark:border-white/10 flex items-center justify-center text-monac-ink/50 dark:text-white/50 hover:border-monac-blue hover:text-monac-blue transition-all hover:scale-110"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => navigate(1)}
                  aria-label="Próximo depoimento"
                  className="w-10 h-10 rounded-full border border-monac-ink/10 dark:border-white/10 flex items-center justify-center text-monac-ink/50 dark:text-white/50 hover:border-monac-blue hover:text-monac-blue transition-all hover:scale-110"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
