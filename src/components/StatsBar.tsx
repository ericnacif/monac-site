import { motion } from "framer-motion";

const stats = [
    { value: "99.9%", label: "Uptime Garantido" },
    { value: "+50ms", label: "Latência API" },
    { value: "100%", label: "Segurança Cloud" },
    { value: "24/7", label: "Monitoramento" },
];

export function StatsBar() {
    return (
        <section className="bg-atlas-ink py-12 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap justify-around gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="text-3xl md:text-4xl font-light text-white mb-2 font-mono">
                            {stat.value}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}