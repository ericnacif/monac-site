import { Instagram, Linkedin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-monac-ink/5 pt-16 pb-8"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Logo e Endereço */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
              {/* LOGO ATUALIZADA */}
              <img
                src="/favicon-monac.png"
                alt="Monac Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-lg text-monac-ink">Monac</span>
            </div>
            <div className="text-sm text-monac-ink/60 space-y-1">
              <p>Manhuaçu — Minas Gerais</p>
            </div>
            <div className="flex gap-4 text-monac-ink/40">
              <a
                href="https://www.instagram.com/monac_sistemas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-monac-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/monac-sistemas/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-monac-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Produto */}
          <div>
            <h4 className="font-bold text-monac-ink mb-4">Produto</h4>
            <ul className="space-y-3 text-sm text-monac-ink/60">
              <li>
                <a href="#platform" className="hover:text-monac-blue">
                  Gestão Financeira
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-monac-blue">
                  Emissor Fiscal
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-monac-blue">
                  Controle de Estoque
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-monac-blue">
                  App Mobile
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-monac-blue">
                  Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h4 className="font-bold text-monac-ink mb-4">Institucional</h4>
            <ul className="space-y-3 text-sm text-monac-ink/60">
              <li>
                <a href="#about" className="hover:text-monac-blue">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-monac-blue">
                  Monac Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Suporte e Contato */}
          <div>
            <h4 className="font-bold text-monac-ink mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-monac-ink/60">
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a
                  href="https://wa.me/5533997088999"
                  target="_blank"
                  className="hover:text-monac-blue"
                >
                  (33) 99708-8999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a
                  href="https://wa.me/5533984286959"
                  target="_blank"
                  className="hover:text-monac-blue"
                >
                  (33) 98428-6959
                </a>
              </li>
              <li className="flex items-center gap-2 pt-2 opacity-80 hover:opacity-100 hover:text-monac-blue transition-colors">
                <Mail size={14} />
                <a href="mailto:monacsistemas@gmail.com">
                  monacsistemas@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-monac-ink/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-monac-ink/40">
          <p>
            © {new Date().getFullYear()} Monac Sistemas. Todos os direitos
            reservados.
          </p>
          <p className="font-medium">
            Desenvolvido em Minas Gerais para todo o Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}
