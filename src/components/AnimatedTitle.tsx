import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedTitle({
  children,
  className = "",
}: AnimatedTitleProps) {
  return (
    <h2 className={`${className} overflow-hidden pb-2`}>
      <motion.div
        initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </h2>
  );
}
