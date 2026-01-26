import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
// A linha do "motion" foi removida daqui porque não estava sendo usada

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
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 border-b ${scrolled
        ? 'bg-atlas-paper/90 backdrop-blur-md border-atlas-ink/5 py-4'
        : 'bg-transparent border-transparent py-8'
      }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-10">

          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer">
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
            {['features', 'pricing', 'about'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-atlas-ink/60 hover:text-atlas-blue transition-colors"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </div>

          {/* CONTROLES */}
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

          {/* MOBILE */}
          <div className="flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-atlas-ink">
              {isMenuOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}