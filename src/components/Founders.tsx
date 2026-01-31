import { Linkedin, ArrowUpRight } from "lucide-react";

export function Founders() {
  return (
    <section id="about" className="py-24 bg-white border-b border-monac-ink/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto Institucional */}
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-monac-blue">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-monac-ink">
              Tecnologia de ponta.
              <br />
              DNA de negócios.
            </h2>
            <p className="text-monac-ink/60 text-lg leading-relaxed">
              O mercado está cheio de softwares complexos criados por quem nunca
              gerenciou uma empresa. Nós fizemos o caminho inverso.
            </p>
            <p className="text-monac-ink/60 text-lg leading-relaxed">
              A Monac nasceu da inconformidade. Unimos a{" "}
              <strong>gestão estratégica</strong> com a{" "}
              <strong>engenharia de software</strong> para criar uma ferramenta
              que não apenas registra dados, mas gera crescimento real.
            </p>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-monac-blue hover:underline"
              >
                Falar com os fundadores <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Cards dos Sócios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Sócio 1: Augusto */}
            <div className="bg-monac-paper rounded-2xl p-6 border border-monac-ink/5 hover:border-monac-blue/20 transition-all group">
              <div className="h-20 w-20 rounded-full bg-gray-200 mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                <img
                  src="https://ui-avatars.com/api/?name=Augusto+Moreira&background=0D8ABC&color=fff"
                  alt="Augusto Moreira"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-monac-ink">
                Augusto Moreira
              </h3>
              <span className="text-xs font-bold uppercase tracking-wider text-monac-ink/40">
                Co-Founder & Business
              </span>
              <p className="text-sm text-monac-ink/60 mt-3">
                Especialista em processos empresariais e estratégias de
                crescimento.
              </p>
              <div className="mt-4 flex gap-3 text-monac-ink/40">
                <a
                  href="https://www.linkedin.com/in/augusto-moreira-28176331a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-monac-blue cursor-pointer transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Sócio 2: Eric */}
            <div className="bg-monac-paper rounded-2xl p-6 border border-monac-ink/5 hover:border-monac-blue/20 transition-all group">
              <div className="h-20 w-20 rounded-full bg-gray-200 mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                <img
                  src="https://ui-avatars.com/api/?name=Eric+Nacif&background=0047BB&color=fff"
                  alt="Eric Nacif"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-monac-ink">Eric Nacif</h3>
              <span className="text-xs font-bold uppercase tracking-wider text-monac-ink/40">
                Co-Founder & Tech
              </span>
              <p className="text-sm text-monac-ink/60 mt-3">
                Arquiteto de software focado em performance e experiência do
                usuário.
              </p>
              <div className="mt-4 flex gap-3 text-monac-ink/40">
                <a
                  href="https://www.linkedin.com/in/eric-nacif-956930324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-monac-blue cursor-pointer transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
