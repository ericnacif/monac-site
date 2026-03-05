import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  exit: {
    scale: 1.15,
    opacity: 0,
    filter: "blur(12px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const letterVariants: Variants = {
  initial: { y: 40, opacity: 0, filter: "blur(8px)" },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SplashScreen() {
  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-monac-ink overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: [1, 1.2, 1] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-monac-blue rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <img
            src="/favicon-monac.png"
            alt="Monac"
            className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_25px_rgba(0,71,187,0.6)]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-monac-blue rounded-full blur-2xl -z-10"
          />
        </motion.div>

        <div className="flex gap-2 mt-10 overflow-hidden px-4">
          {"MONAC".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 + i * 0.08 }}
              className="text-white text-4xl md:text-5xl font-bold tracking-[0.25em]"
              style={{
                fontFamily:
                  "'Century Gothic', Futura, 'Trebuchet MS', sans-serif",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4"
        >
          <span
            className="text-monac-blue text-xs md:text-sm tracking-[0.5em] font-bold uppercase ml-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Sistemas
          </span>
        </motion.div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "260px", opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] bg-white/10 mt-12 relative overflow-hidden rounded-full"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 1.5,
              delay: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-monac-blue to-transparent shadow-[0_0_10px_#0047BB]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
