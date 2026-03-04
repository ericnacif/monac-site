import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("monac-cookie-consent");
    if (!consent) setTimeout(() => setVisible(true), 2500);
  }, []);

  const accept = () => {
    localStorage.setItem("monac-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("monac-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
          role="alertdialog"
          aria-label="Aviso de cookies"
          aria-modal="false"
        >
          <div className="bg-white dark:bg-monac-ink/95 border border-monac-ink/8 dark:border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <Cookie size={18} className="text-monac-blue flex-shrink-0" aria-hidden="true" />
                <span
                  className="text-sm font-bold text-monac-ink dark:text-white"
                  style={{ fontFamily: "'Century Gothic', Futura, sans-serif" }}
                >
                  Cookies & Privacidade
                </span>
              </div>
              <button
                onClick={decline}
                aria-label="Fechar aviso de cookies"
                className="text-monac-ink/40 hover:text-monac-ink dark:text-white/40 dark:hover:text-white transition-colors flex-shrink-0"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            <p
              className="text-xs text-monac-ink/60 dark:text-white/50 leading-relaxed mb-4 font-light"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Usamos cookies para melhorar sua experiência e analisar o uso do site, conforme a{" "}
              <strong className="font-semibold text-monac-ink/80 dark:text-white/70">LGPD</strong>.
              Sem dados de cartão ou informação pessoal sensível.
            </p>

            <div className="flex gap-2">
              <button
                onClick={accept}
                className="btn-monac-primary flex-1 h-9 text-xs"
                aria-label="Aceitar uso de cookies"
              >
                Aceitar
              </button>
              <button
                onClick={decline}
                className="flex-1 h-9 rounded-xl border border-monac-ink/10 dark:border-white/10 text-monac-ink/60 dark:text-white/50 text-xs font-medium hover:border-monac-ink/30 transition-all"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                aria-label="Recusar uso de cookies"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
