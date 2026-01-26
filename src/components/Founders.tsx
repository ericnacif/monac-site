import { motion } from "framer-motion";

export function Founders() {
    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12">

                <div className="text-center mb-20">
                    <h2 className="text-3xl font-light text-atlas-ink mb-6">
                        Liderança Técnica & Fiscal
                    </h2>
                    <p className="text-atlas-ink/60 text-sm max-w-2xl mx-auto">
                        O Atlas é o resultado da união entre a engenharia de software de alta performance e a inteligência tributária avançada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    {/* Eric Nacif */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <div className="h-[2px] w-12 bg-atlas-blue mb-4"></div>
                        <h3 className="text-2xl font-serif italic text-atlas-ink">Eric Nacif</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-atlas-ink/40">Co-Founder & CTO</span>
                        <p className="text-sm leading-relaxed text-atlas-ink/70 text-justify">
                            Responsável por toda a arquitetura tecnológica do Atlas. Com visão focada em escalabilidade e segurança, Eric garante que o sistema processe milhares de notas fiscais simultaneamente sem falhas, utilizando infraestrutura Cloud Native de última geração.
                        </p>
                    </motion.div>

                    {/* Augusto Moreira */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <div className="h-[2px] w-12 bg-atlas-ink/20 mb-4"></div>
                        <h3 className="text-2xl font-serif italic text-atlas-ink">Augusto Moreira</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-atlas-ink/40">Co-Founder & CFO</span>
                        <p className="text-sm leading-relaxed text-atlas-ink/70 text-justify">
                            A mente contábil e financeira por trás do negócio. Augusto traz a expertise de anos em legislação tributária para dentro do algoritmo do Atlas. Ele assegura que cada cálculo de imposto e regra fiscal esteja blindada contra erros, protegendo o caixa do cliente.
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}