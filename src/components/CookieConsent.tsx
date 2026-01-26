import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verifica se já aceitou
        const consent = localStorage.getItem("atlas-cookie-consent");
        if (!consent) {
            // Espera 2 segundos para aparecer (não assusta quem acabou de entrar)
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("atlas-cookie-consent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-[60] bg-atlas-ink text-atlas-paper p-6 rounded-sm shadow-2xl border border-white/10"
                >
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-white">Privacidade</h4>
                            <p className="text-xs leading-relaxed text-white/70">
                                Utilizamos cookies para melhorar sua experiência de navegação e garantir a segurança dos dados, conforme nossa Política de Privacidade.
                            </p>
                        </div>
                        <button onClick={() => setIsVisible(false)} className="text-white/40 hover:text-white">
                            <X size={16} />
                        </button>
                    </div>

                    <div className="mt-4 flex gap-4">
                        <button
                            onClick={handleAccept}
                            className="flex-1 bg-atlas-blue text-white py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors"
                        >
                            Aceitar
                        </button>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                        >
                            Recusar
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}