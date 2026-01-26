import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Como funciona a migração de dados do meu sistema antigo?",
        answer: "É simples e automatizada. Nós importamos seus cadastros de produtos, clientes e fornecedores através de planilhas Excel ou XMLs das notas fiscais emitidas. Você não começa do zero."
    },
    {
        question: "Preciso pagar taxa de implantação (Setup)?",
        answer: "Sim. O Setup garante que sua empresa comece rodando 100% correta. Inclui a instalação do certificado digital, configuração das regras de imposto (CFOP, Alíquotas) e treinamento da equipe."
    },
    {
        question: "O sistema funciona se a internet cair?",
        answer: "O Atlas é 100% em nuvem para garantir segurança e acesso de qualquer lugar. Para supermercados com alto volume, oferecemos um módulo de contingência PDV que opera offline temporariamente."
    },
    {
        question: "Posso cancelar a qualquer momento?",
        answer: "Sim. Não exigimos fidelidade contratual nos planos mensais. Acreditamos que você deve ficar porque o sistema gera lucro, não porque está preso a um contrato."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-atlas-paper relative border-t border-atlas-ink/5">
            <div className="max-w-[800px] mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-atlas-ink mb-4">
                        Dúvidas Frequentes
                    </h2>
                    <p className="text-atlas-ink/60 text-sm">
                        Tudo o que você precisa saber antes de começar.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-atlas-ink/10 bg-white/50 rounded-sm overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
                            >
                                <span className="text-base font-medium text-atlas-ink pr-8">{faq.question}</span>
                                <span className="text-atlas-blue flex-shrink-0">
                                    {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-sm leading-relaxed text-atlas-ink/70 border-t border-atlas-ink/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}