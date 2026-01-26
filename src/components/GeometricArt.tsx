import { motion } from "framer-motion";

export function GeometricArt() {
    // CORREÇÃO AQUI: Adicionei "as [number, number, number, number]" para o TypeScript aceitar a curva
    const smoothTransition = {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    };

    return (
        <motion.div
            className="relative w-full h-[500px] flex items-center justify-center cursor-crosshair"
            initial="idle"
            whileHover="aligned"
        >

            {/* Grid de Fundo */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,24,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,24,32,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]"></div>

            <svg width="500" height="500" viewBox="0 0 400 400" className="relative z-10 overflow-visible">

                {/* --- FACE SUPERIOR --- */}
                <motion.path
                    d="M 200 140 L 280 190 L 200 240 L 120 190 Z"
                    fill="transparent"
                    stroke="#0047BB" strokeWidth="1.5"
                    style={{ originX: "200px", originY: "240px" }}
                    variants={{
                        idle: { y: -40, rotate: -5, scale: 0.9, opacity: 0.6, stroke: "#101820" },
                        aligned: { y: 0, rotate: 0, scale: 1, opacity: 1, stroke: "#0047BB", fill: "rgba(0, 71, 187, 0.05)" }
                    }}
                    transition={smoothTransition}
                />

                {/* --- FACE DIREITA --- */}
                <motion.path
                    d="M 200 240 L 280 190 L 280 290 L 200 340 Z"
                    fill="transparent"
                    stroke="#0047BB" strokeWidth="1.5"
                    style={{ originX: "240px", originY: "290px" }}
                    variants={{
                        idle: { x: 30, y: 20, rotate: 5, scale: 0.9, opacity: 0.6, stroke: "#101820" },
                        aligned: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, stroke: "#0047BB", fill: "rgba(0, 71, 187, 0.1)" }
                    }}
                    transition={{ ...smoothTransition, delay: 0.05 }}
                />

                {/* --- FACE ESQUERDA --- */}
                <motion.path
                    d="M 200 240 L 120 190 L 120 290 L 200 340 Z"
                    fill="transparent"
                    stroke="#0047BB" strokeWidth="1.5"
                    style={{ originX: "160px", originY: "290px" }}
                    variants={{
                        idle: { x: -30, y: 20, rotate: -5, scale: 0.9, opacity: 0.6, stroke: "#101820" },
                        aligned: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, stroke: "#0047BB", fill: "rgba(0, 71, 187, 0.15)" }
                    }}
                    transition={{ ...smoothTransition, delay: 0.1 }}
                />

                {/* --- ELEMENTOS FLUTUANTES (Fantasmas) --- */}
                <motion.rect
                    x="80" y="80" width="40" height="40"
                    stroke="#101820" strokeWidth="0.5" fill="transparent" opacity="0.1"
                    animate={{ rotate: [0, 90], x: [0, 20], y: [0, 20] }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />

                <motion.circle
                    cx="320" cy="300" r="15"
                    stroke="#101820" strokeWidth="0.5" fill="transparent" opacity="0.1"
                    animate={{ scale: [1, 1.2], y: [0, -30] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />

            </svg>

            {/* Texto de Status Suave */}
            <motion.div
                className="absolute bottom-10 right-10 font-mono text-[9px] text-atlas-blue tracking-widest uppercase text-right"
                variants={{
                    idle: { opacity: 0, y: 5 },
                    aligned: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8 }}
            >
                Structure Assembled
            </motion.div>

        </motion.div>
    );
}