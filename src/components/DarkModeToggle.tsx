import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("monac-theme");
    const dark = saved === "dark";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("monac-theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={isDark}
      className={`relative w-14 h-7 rounded-full border transition-colors duration-500 ease-in-out flex items-center overflow-hidden ${
        isDark
          ? "bg-[#080d14] border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
          : "bg-monac-paper border-monac-ink/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
      }`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 25 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-monac-blue rounded-full pointer-events-none"
      />

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`absolute w-5 h-5 rounded-full flex items-center justify-center shadow-md z-10 ${
          isDark ? "bg-white left-[calc(100%-1.625rem)]" : "bg-white left-1"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={12} className="text-monac-blue" aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={12} className="text-amber-500" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
