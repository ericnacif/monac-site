import { Linkedin, ArrowUpRight } from "lucide-react";

export function Founders() {
  return (
    <section id="about" className="py-24 bg-white border-b border-monac-ink/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto Institucional */}
          <div className="space-y-6">
            <span className="section-label">Quem Somos</span>
            <h2 className="section-title">
              Tecnologia de ponta.<br />DNA de negócios.
            </h2>
            <p className="section-subtitle">
              O mercado está cheio de softwares complexos criados por quem nunca gerenciou uma empresa. Nós fizemos o caminho inverso.
            </p>
            <p className="text-monac-ink/60 text-lg leading-relaxed font-light" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
              A Monac nasceu da inconformidade. Unimos a{" "}
              <strong className="font-semibold text-monac-ink">gestão estratégica</strong> com a{" "}
              <strong className="font-semibold text-monac-ink">engenharia de software</strong> para criar
              uma ferramenta que não apenas registra dados, mas gera crescimento real.
            </p>

            <div className="pt-6">
              <a
                href="https://wa.me/5533997088999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-monac-blue hover:underline"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Falar com os fundadores <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Cards dos Sócios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: "Augusto Moreira",
                role: "Co-Founder & Business",
                bio: "Especialista em processos empresariais e estratégias de crescimento.",
                linkedin: "https://www.linkedin.com/in/augusto-moreira-28176331a/",
                avatar: "https://ui-avatars.com/api/?name=Augusto+Moreira&background=0D8ABC&color=fff",
              },
              {
                name: "Eric Nacif",
                role: "Co-Founder & Tech",
                bio: "Arquiteto de software focado em performance e experiência do usuário.",
                linkedin: "https://www.linkedin.com/in/eric-nacif-956930324/",
                avatar: "https://ui-avatars.com/api/?name=Eric+Nacif&background=0047BB&color=fff",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="card-monac p-6 hover:border-monac-blue/20 group"
              >
                <div className="h-20 w-20 rounded-full bg-gray-200 mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
                </div>

                <h3
                  className="font-bold text-lg text-monac-ink"
                  style={{ fontFamily: "'Century Gothic', Futura, 'Trebuchet MS', sans-serif" }}
                >
                  {person.name}
                </h3>

                <span className="label-brand text-monac-ink/40" style={{ marginBottom: '0.75rem', display: 'block' }}>
                  {person.role}
                </span>

                <p className="text-sm text-monac-ink/60 mt-3 font-light" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                  {person.bio}
                </p>

                <div className="mt-4 flex gap-3 text-monac-ink/40">
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                    className="hover:text-monac-blue cursor-pointer transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
