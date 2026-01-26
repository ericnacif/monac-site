import { motion } from "framer-motion";
import { ShoppingCart, Package, FileText, TrendingUp, ArrowUpRight } from "lucide-react";

export function Features() {

    const features = [
        {
            title: "Vendas e Fiscal (Saída)",
            desc: "Emissão de NF-e em 3 cliques. Ao vender, o sistema gera o XML, assina, transmite para a SEFAZ, baixa o estoque e lança a receita no financeiro.",
            icon: <FileText strokeWidth={1} size={28} />,
            col: "lg:col-span-6",
            delay: 0
        },
        {
            title: "Compras e Importação (Entrada)",
            desc: "Fim da digitação manual. Arraste o XML do fornecedor e o Atlas cadastra produtos e fornecedores automaticamente, alimentando estoque e contas a pagar.",
            icon: <Package strokeWidth={1} size={28} />,
            col: "lg:col-span-6",
            delay: 0.1
        },
        {
            title: "Controle de Estoque Real",
            desc: "Um estoque vivo que reage sozinho. Rastreabilidade total do que entra e sai sem necessidade de planilhas paralelas.",
            icon: <ShoppingCart strokeWidth={1} size={28} />,
            col: "lg:col-span-6", // Ajustei para ficar equilibrado (2x2)
            delay: 0.2
        },
        {
            title: "Gestão Financeira",
            desc: "Fluxo de caixa automático. Contas a pagar e receber são alimentadas pelas notas fiscais, com baixa de títulos e indicadores em tempo real.",
            icon: <TrendingUp strokeWidth={1} size={28} />,
            col: "lg:col-span-6",
            delay: 0.3
        }
    ];

    return (
        <section id="features" className="py-32 relative bg-white/40">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Cabeçalho da Seção */}
                <div className="mb-24 md:flex items-end justify-between">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="h-1 bg-atlas-blue mb-8"
                        />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-light text-atlas-ink leading-[0.95]"
                        >
                            O Atlas trabalha <br />
                            <span className="font-serif italic text-atlas-blue">para você</span>.
                        </motion.h2>
                        <p className="mt-6 text-atlas-ink/70 max-w-xl text-lg font-light">
                            Diferente de sistemas que exigem que você trabalhe para eles, nós invertemos a lógica. O processamento do documento fiscal faz todo o "trabalho sujo" nos bastidores.
                        </p>
                    </div>
                </div>

                {/* Bento Grid (Agora 2x2 para destacar os 4 pilares) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: f.delay }}
                            viewport={{ once: true }}
                            className={`${f.col} group relative bg-white border border-atlas-ink/10 p-10 hover:shadow-2xl hover:shadow-atlas-blue/5 hover:border-atlas-blue/30 transition-all duration-500 rounded-sm cursor-default`}
                        >
                            <div className="mb-6 text-atlas-ink/80 group-hover:text-atlas-blue transition-colors duration-500">
                                {f.icon}
                            </div>

                            <h3 className="text-xl font-medium text-atlas-ink mb-3 group-hover:translate-x-1 transition-transform duration-500">
                                {f.title}
                            </h3>

                            <p className="text-sm text-atlas-ink/60 leading-relaxed max-w-md">
                                {f.desc}
                            </p>

                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-atlas-blue translate-y-2 group-hover:translate-y-0">
                                <ArrowUpRight size={20} strokeWidth={1} />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}