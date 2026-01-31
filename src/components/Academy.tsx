import { PlayCircle, FileText, ArrowRight, BookOpen } from "lucide-react";

const contents = [
  {
    type: "Vídeo Aula",
    title: "Como emitir sua primeira NF-e em 30 segundos",
    duration: "3 min",
    icon: PlayCircle,
  },
  {
    type: "Artigo",
    title: "Fluxo de Caixa: O guia definitivo para não quebrar",
    duration: "Leitura de 5 min",
    icon: FileText,
  },
  {
    type: "Vídeo Aula",
    title: "Reforma Tributária: O que muda para o seu comércio?",
    duration: "12 min",
    icon: PlayCircle,
  },
];

export function Academy() {
  return (
    <section
      id="academy"
      className="py-24 bg-monac-ink text-white relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4 text-monac-blue">
              <BookOpen size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Monac Academy
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Domine a gestão da sua empresa.
            </h2>
            <p className="text-white/60 text-lg">
              Conteúdo gratuito para te ajudar a entender impostos, finanças e
              processos, mesmo que você não seja cliente.
            </p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2">
            Acessar Portal
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contents.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-monac-blue bg-monac-blue/10 px-2 py-1 rounded">
                  {item.type}
                </span>
                <item.icon
                  size={20}
                  className="text-white/40 group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-monac-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-white/40 font-mono">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
