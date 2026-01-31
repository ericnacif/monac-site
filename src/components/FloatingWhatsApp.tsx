import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5533997088999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-green-400/50 transition-all flex items-center gap-3 group"
    >
      <MessageCircle size={28} strokeWidth={2} />

      <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 whitespace-nowrap font-bold text-sm">
        Fale Conosco
      </span>

      <div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-20"></div>
    </motion.a>
  );
}
