import { motion } from "framer-motion";
import { Cloud, Lock, CheckCircle, Zap } from "lucide-react";

export function Infrastructure() {
    const techs = [
        { name: "Sistema 100% Web", icon: <Cloud size={18} strokeWidth={1.5} /> },
        { name: "Backup Automático", icon: <CheckCircle size={18} strokeWidth={1.5} /> },
        { name: "Segurança de Dados", icon: <Lock size={18} strokeWidth={1.5} /> },
        { name: "Sem Instalação", icon: <Zap size={18} strokeWidth={1.5} /> },
    ];

    return (
        <section className="py-10 border-b border-atlas-ink/5 bg-atlas-ink/[0.02]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">

                <span className="text-[10px] font-bold uppercase tracking-widest text-atlas-ink/40 whitespace-nowrap">
                    Tecnologia que elimina o caos
                </span>

                <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
                    {techs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-atlas-ink/60 hover:text-atlas-blue transition-colors cursor-default group"
                        >
                            <span className="group-hover:scale-110 transition-transform duration-300 text-atlas-blue/80">
                                {item.icon}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider">{item.name}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}