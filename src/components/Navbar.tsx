import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const navLinks = ['features', 'pricing', 'about'];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 border-b ${scrolled
          ? 'bg-atlas-paper/90 backdrop-blur-md border-atlas-ink/5 py-4'
          : 'bg-transparent border-transparent py-8'
        }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-10">

            {/* LOGO */}
            <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer z-50">
              <div className="h-9 w-9 bg-atlas-ink text-atlas-paper flex items-center justify-center font-serif text-xl italic font-bold">
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
                  key={item}
                  href={`#${item}`}
                  className="text-[10px] font-bold uppercase tracking-[0.15em] text-atlas-ink/60 hover:text-atlas-blue transition-colors"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>

            {/* CONTROLES DESKTOP */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-6 text-[10px] font-bold text-atlas-ink/40 uppercase tracking-wider relative">
                {['pt', 'en', 'es'].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`hover:text-atlas-blue transition-colors ${i18n.language === lng ? 'text-atlas-ink' : ''}`}
                  >
                    {lng}
                  </button>
                ))}
              </div>

              <button className="px-6 py-2 border border-atlas-ink/20 text-atlas-ink text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-atlas-ink hover:text-white transition-all">
                {t('nav.login')}
              </button>
            </div>

            {/* BOTÃO MOBILE (Hambúrguer) */}
            <div className="flex md:hidden z-50">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-atlas-ink p-2">
                {isMenuOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* OVERLAY DO MENU MOBILE (Tela Cheia) */}
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
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="text-4xl font-light text-atlas-ink border-b border-atlas-ink/10 pb-4 flex items-center justify-between group"
                >
                  {t(`nav.${item}`)}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-atlas-blue" />
                </motion.a>
              ))}

              <div className="mt-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-atlas-ink/40 mb-4">Idioma</p>
                <div className="flex gap-6 text-xl">
                  {['pt', 'en', 'es'].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className={`${i18n.language === lng ? 'text-atlas-blue font-bold' : 'text-atlas-ink/60'}`}
                    >
                      {lng.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <button className="mt-8 w-full py-4 bg-atlas-ink text-white font-bold uppercase tracking-widest text-xs">
                {t('nav.login')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}