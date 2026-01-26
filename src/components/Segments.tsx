import { motion } from "framer-motion";
import { Store, ShoppingBag, Truck, Pill } from "lucide-react";

export function Segments() {
    const segments = [
        {
            icon: <Store size={32} />,
            title: "Supermercados",
            desc: "PDV ultra-rápido, contingência offline e integração com balanças."
        },
        {
            icon: <Pill size={32} />,
            title: "Farmácias",
            desc: "Módulo SNGPC integrado, gestão de lotes de controlados e Farmácia Popular."
        },
        {
            icon: <Truck size={32} />,
            title: "Distribuidoras",
            desc: "Controle de rotas, separação via coletor de dados e tabelas de preço por região."
        },
        {
            icon: <ShoppingBag size={32} />,
            title: "Varejo Geral",
            desc: "Para lojas de roupas e sapatos. Controle de grade (cor/tamanho) e crediário próprio."
        }
    ];

    return (
        <section className="py-24 bg-atlas-paper border-b border-atlas-ink/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-atlas-blue mb-4 block">
                        Soluções Especializadas
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-atlas-ink">
                        O Atlas fala a língua do <span className="font-serif italic text-atlas-blue">seu negócio</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {segments.map((seg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 border border-atlas-ink/10 bg-white hover:border-atlas-blue/30 transition-colors group cursor-default"
                        >
                            <div className="mb-6 text-atlas-ink/40 group-hover:text-atlas-blue transition-colors">
                                {seg.icon}
                            </div>
                            <h3 className="text-lg font-medium mb-3 text-atlas-ink">{seg.title}</h3>
                            <p className="text-xs leading-relaxed text-atlas-ink/60">{seg.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}