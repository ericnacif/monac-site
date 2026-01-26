import { motion } from "framer-motion";

export function ProductShowcase() {
    return (
        <section className="py-20 bg-atlas-ink overflow-hidden text-atlas-paper">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-light mb-6">
                    Controle total. <span className="font-serif italic text-atlas-blue">Visualmente simples.</span>
                </h2>
                <p className="text-white/60 text-sm max-w-xl mx-auto">
                    Interface desenhada para reduzir o ruído visual e focar no que importa: seus números.
                </p>
            </div>

            {/* O Mockup do Sistema (Feito com CSS) */}
            <div className="relative max-w-5xl mx-auto perspective-1000">
                <motion.div
                    initial={{ rotateX: 20, opacity: 0, y: 50 }}
                    whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-atlas-paper rounded-lg shadow-2xl overflow-hidden border border-white/10"
                >
                    {/* Barra Superior do Sistema */}
                    <div className="h-12 bg-[#e5e5e5] border-b border-gray-300 flex items-center px-4 gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="h-6 w-64 bg-white rounded-md shadow-inner"></div>
                    </div>

                    {/* Corpo do Sistema */}
                    <div className="flex h-[500px] bg-[#F2F0EB] text-atlas-ink">

                        {/* Sidebar (Menu Lateral) */}
                        <div className="w-64 border-r border-gray-200 p-6 flex flex-col gap-4">
                            <div className="h-8 w-8 bg-atlas-blue rounded-lg mb-8"></div>
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                            ))}
                        </div>

                        {/* Área Principal (Dashboard) */}
                        <div className="flex-1 p-8">

                            <div className="flex justify-between items-end mb-8">
                                <div className="h-8 w-48 bg-gray-300 rounded"></div>
                                <div className="h-8 w-24 bg-atlas-blue rounded shadow-lg shadow-atlas-blue/30"></div>
                            </div>

                            {/* Cards de Métricas */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-32 bg-white rounded border border-gray-200 p-4 shadow-sm">
                                        <div className="h-4 w-20 bg-gray-100 rounded mb-4"></div>
                                        <div className="h-8 w-32 bg-gray-200 rounded"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Gráfico Fake */}
                            <div className="h-64 bg-white rounded border border-gray-200 p-6 flex items-end gap-4 shadow-sm">
                                {[40, 70, 45, 90, 60, 80, 50, 95].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="flex-1 bg-atlas-ink/10 rounded-t hover:bg-atlas-blue transition-colors"
                                    ></motion.div>
                                ))}
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}