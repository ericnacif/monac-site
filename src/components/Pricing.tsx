import { motion } from "framer-motion";
import { Check, ArrowRight, Plus, HelpCircle } from "lucide-react";

export function Pricing() {

    const plans = [
        {
            name: "Standard",
            price: "149,90",
            target: "Pequenos Negócios",
            desc: "O essencial para estar em dia com o fisco e organizar a casa.",
            features: [
                "1 Usuário",
                "Emissão Fiscal (NF-e/NFC-e)",
                "Suporte via Chat/Email",
                "Gestão de Vendas Simples",
                "Sem Gestão Financeira"
            ],
            highlight: false
        },
        {
            name: "Pro",
            price: "289,90",
            target: "Negócios em Crescimento",
            desc: "Controle total: Financeiro, Estoque real e Inteligência de vendas.",
            features: [
                "Até 3 Usuários",
                "Financeiro Completo (DRE/Caixa)",
                "Controle de Estoque (Baixa auto)",
                "Curva ABC (Produtos mais vendidos)",
                "Suporte Prioritário WhatsApp"
            ],
            highlight: true // Destaque
        },
        {
            name: "Premium",
            price: "549,90",
            target: "Redes e Alta Demanda",
            desc: "Para quem não pode parar. Multi-estoque e gestão avançada.",
            features: [
                "Usuários Ilimitados",
                "Multi-estoque (Loja + Depósito)",
                "Gestão de Comissão",
                "Dashboard de BI Avançado",
                "Backup em Tempo Real"
            ],
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-32 border-t border-atlas-ink/5 bg-atlas-paper">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Título */}
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-atlas-blue mb-4 block">
                        Planos Transparentes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-light text-atlas-ink mb-6">
                        Investimento que se paga no <span className="font-serif italic text-atlas-blue">primeiro mês</span>.
                    </h2>
                </div>

                {/* Grid de Planos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`relative p-8 flex flex-col justify-between border ${plan.highlight
                                    ? "bg-atlas-blue text-white border-atlas-blue shadow-2xl shadow-atlas-blue/20 transform md:-translate-y-4 rounded-sm"
                                    : "bg-white border-atlas-ink/10 text-atlas-ink hover:border-atlas-blue/30 rounded-sm"
                                } transition-all duration-300`}
                        >
                            <div>
                                <div className={`mb-4 text-[10px] font-bold uppercase tracking-widest ${plan.highlight ? "text-white/70" : "text-atlas-ink/40"}`}>
                                    {plan.target}
                                </div>

                                <h3 className="text-3xl font-light mb-4">{plan.name}</h3>

                                {/* PREÇO COM "A PARTIR DE" */}
                                <div className="mb-4">
                                    <span className={`block text-[10px] uppercase tracking-widest mb-1 ${plan.highlight ? "text-white/60" : "text-atlas-ink/40"}`}>
                                        A partir de
                                    </span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-sm opacity-60">R$</span>
                                        <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                                        <span className="text-sm opacity-60">/mês</span>
                                    </div>
                                </div>

                                <p className={`text-xs mb-8 leading-relaxed ${plan.highlight ? "text-white/80" : "text-atlas-ink/60"}`}>
                                    {plan.desc}
                                </p>

                                <div className="w-full h-px bg-current opacity-10 mb-8"></div>

                                <ul className="space-y-3 mb-10">
                                    {plan.features.map((feat, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm">
                                            <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-white" : "text-atlas-blue"}`} />
                                            <span className="opacity-90">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={() => window.open('https://wa.me/5533999999999', '_blank')}
                                className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] border transition-colors flex items-center justify-center gap-2 group rounded-sm ${plan.highlight
                                        ? "bg-white text-atlas-blue border-white hover:bg-atlas-paper"
                                        : "bg-transparent border-atlas-ink/20 hover:border-atlas-blue hover:text-atlas-blue"
                                    }`}>
                                Contratar Agora
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Seção de Setup e Adicionais */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card Setup */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-atlas-ink/[0.02] border border-atlas-ink/10 p-8 rounded-sm"
                    >
                        <div className="flex items-center gap-3 mb-4 text-atlas-ink">
                            <Plus size={20} className="text-atlas-blue" />
                            <h4 className="text-lg font-medium">Taxa de Implantação (Setup)</h4>
                        </div>
                        <p className="text-sm text-atlas-ink/60 mb-6">
                            Garantimos que você comece certo. Inclui instalação de certificado A1/A3, configuração tributária (CFOP, ICMS) e homologação na SEFAZ.
                        </p>
                        <div className="flex justify-between items-center text-sm border-t border-atlas-ink/10 pt-4">
                            <span>Setup Padrão</span>
                            <span className="font-bold">R$ 800,00</span>
                        </div>
                        <div className="flex justify-between items-center text-sm pt-2 text-atlas-ink/60">
                            <span>Setup Complexo (Supermercados)</span>
                            <span>Sob Consulta</span>
                        </div>
                    </motion.div>

                    {/* Card Módulos Extras */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-atlas-ink/[0.02] border border-atlas-ink/10 p-8 rounded-sm"
                    >
                        <div className="flex items-center gap-3 mb-4 text-atlas-ink">
                            <HelpCircle size={20} className="text-atlas-blue" />
                            <h4 className="text-lg font-medium">Módulos Especialistas</h4>
                        </div>
                        <p className="text-sm text-atlas-ink/60 mb-6">
                            Funcionalidades específicas para nichos regulados que exigem integrações governamentais extras.
                        </p>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm border-t border-atlas-ink/10 pt-4">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-atlas-blue rounded-full"></span>
                                    Farmácias (SNGPC)
                                </span>
                                <span className="font-bold text-atlas-ink">+ R$ 150,00<span className="text-[10px] font-normal opacity-60">/mês</span></span>
                            </div>
                            <div className="flex justify-between items-center text-sm pt-2 text-atlas-ink/60">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    Supermercados (Alta Volumetria)
                                </span>
                                <span>Sob Consulta</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}