import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "../config";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [dismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white dark:bg-monac-ink border border-monac-ink/8 dark:border-white/10 rounded-2xl shadow-2xl w-72 overflow-hidden"
            role="dialog"
            aria-label="Chat do WhatsApp"
            aria-modal="false"
          >
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                  M
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Monac Sistemas
                  </div>
                  <div className="text-xs text-white/70 flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                      aria-hidden="true"
                    />
                    Online agora
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar chat"
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="p-4 bg-[#E5DDD5]/30 dark:bg-white/5">
              <div className="bg-white dark:bg-monac-ink/80 rounded-xl rounded-tl-none p-4 shadow-sm border border-monac-ink/5 dark:border-white/10 max-w-[85%]">
                <p
                  className="text-sm text-monac-ink dark:text-white leading-relaxed font-light"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  👋 Olá! Tudo certo por aqui.
                  <br />
                  <br />
                  Posso te ajudar a entender como o{" "}
                  <strong className="font-semibold">Monac ERP</strong> pode
                  organizar a sua empresa.
                  <br />
                  <br />
                  Qual é o seu segmento?
                </p>
                <div
                  className="text-right mt-2 text-[10px] text-monac-ink/30 dark:text-white/30"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {new Date().toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>

            <div className="p-4 space-y-2 border-t border-monac-ink/5 dark:border-white/5">
              {[
                "Varejo / Comércio",
                "Indústria / Fábrica",
                "Distribuidora",
                "Prestador de Serviço",
              ].map((seg) => (
                <button
                  key={seg}
                  onClick={() =>
                    window.open(
                      `${SITE_CONFIG.whatsapp.url}?text=${encodeURIComponent(`Olá! Sou do segmento de ${seg} e quero conhecer o Monac ERP.`)}`,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="w-full text-left text-xs font-medium text-monac-blue dark:text-blue-400 border border-monac-blue/20 dark:border-blue-400/20 rounded-lg px-3 py-2 hover:bg-monac-blue hover:text-white hover:border-monac-blue transition-all"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
                >
                  {seg}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {!open && (
          <span
            className="absolute -top-1 -right-1 flex h-3 w-3"
            aria-hidden="true"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center text-white transition-all"
          aria-label={
            open ? "Fechar chat do WhatsApp" : "Abrir chat do WhatsApp"
          }
          aria-expanded={open}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
              >
                <X size={24} aria-hidden="true" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
              >
                <MessageCircle size={26} aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
