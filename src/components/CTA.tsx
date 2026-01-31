import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24 bg-monac-blue relative overflow-hidden">
      {/* TEXTURA DE FUNDO (Visual Refinement) */}
      {/* Grid sutil branco com baixa opacidade para dar profundidade */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      {/* Gradiente radial para focar no centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Sua empresa não pode
          <br />
          esperar mais.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Troque o caos das planilhas pela inteligência do Monac ERP.
          Implantação rápida, suporte humano e tecnologia de ponta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Botão Principal (Branco) */}
          <button
            onClick={() => window.open("https://wa.me/5533999999999", "_blank")}
            className="h-14 px-8 rounded-xl bg-white text-monac-blue font-bold uppercase tracking-widest hover:bg-gray-50 transition-all shadow-xl shadow-monac-blue/20 flex items-center justify-center gap-2 group"
          >
            Começar Agora{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          {/* Botão Secundário (Transparente) */}
          <button
            onClick={() => window.open("https://wa.me/5533999999999", "_blank")}
            className="h-14 px-8 rounded-xl border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} /> Falar com Consultor
          </button>
        </motion.div>
      </div>
    </section>
  );
}
