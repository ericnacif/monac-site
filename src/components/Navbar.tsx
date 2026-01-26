import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Muda o fundo da barra ao rolar
      setScrolled(window.scrollY > 20);

      // 2. Scroll Spy (Detecta em qual seção o usuário está)
      const sections = ['features', 'pricing', 'about'];
      const scrollPosition = window.scrollY + 150; // Offset para compensar a altura do menu

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
      // Se estiver no topo, limpa a seleção
      if (window.scrollY < 100) setActiveSection("");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'features', label: 'Funcionalidades' },
    { id: 'pricing', label: 'Planos' },
    { id: 'about', label: 'Sobre' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 border-b ${scrolled
          ? 'bg-atlas-paper/95 backdrop-blur-md border-atlas-ink/5 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-8'
        }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-10">

            {/* LOGO */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0 flex items-center gap-4 cursor-pointer z-50 group"
            >
              <div className="h-9 w-9 bg-atlas-ink text-atlas-paper flex items-center justify-center font-serif text-xl italic font-bold group-hover:bg-atlas-blue transition-colors duration-500">
                A
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold tracking-[0.2em] text-atlas-ink uppercase leading-none">
                  Atlas
                </span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-atlas-ink/60 uppercase leading-none mt-1">
                  Systems
                </span>
              </div>
            </div>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${activeSection === item.id
                      ? "text-atlas-blue scale-105"
                      : "text-atlas-ink/60 hover:text-atlas-blue"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* LOGIN BUTTON */}
            <div className="hidden md:flex items-center gap-10">
              <button className="px-6 py-2 border border-atlas-ink/20 text-atlas-ink text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-atlas-ink hover:text-white transition-all cursor-pointer">
                ENTRAR
              </button>
            </div>

            {/* BOTÃO MOBILE */}
            <div className="flex md:hidden z-50">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-atlas-ink p-2">
                {isMenuOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE FULLSCREEN */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-atlas-paper z-40 flex flex-col pt-32 px-6"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className={`text-4xl font-light border-b border-atlas-ink/10 pb-4 flex items-center justify-between group ${activeSection === item.id ? "text-atlas-blue" : "text-atlas-ink"
                    }`}
                >
                  {item.label}
                  <ArrowRight className={`transition-all ${activeSection === item.id
                      ? "opacity-100 text-atlas-blue"
                      : "opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 text-atlas-blue"
                    }`} />
                </motion.a>
              ))}

              <button className="mt-8 w-full py-4 bg-atlas-ink text-white font-bold uppercase tracking-widest text-xs">
                ENTRAR NO SISTEMA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}