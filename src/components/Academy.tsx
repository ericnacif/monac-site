import { PlayCircle, FileText, ArrowRight, BookOpen, Eye } from "lucide-react";
import { usePDF } from "@react-pdf/renderer";
import { FluxoCaixaPDF } from "../documents/FluxoCaixaPDF";

// CONTEÚDO DOS CARDS
const contents = [
  {
    id: 1,
    type: "Vídeo Aula",
    title: "Como emitir sua primeira NF-e em 30 segundos",
    duration: "3 min",
    icon: PlayCircle,
    actionText: "Assistir Agora",
  },
  {
    id: 2,
    type: "E-book PDF",
    title: "Fluxo de Caixa: O guia definitivo para não quebrar",
    duration: "Leitura de 5 min",
    icon: FileText,
    actionText: "Ler Material", // Mudamos o texto para "Ler"
  },
  {
    id: 3,
    type: "Vídeo Aula",
    title: "Reforma Tributária: O que muda para o seu comércio?",
    duration: "12 min",
    icon: PlayCircle,
    actionText: "Assistir Agora",
  },
];

// Sub-componente isolado para gerenciar o Hook do PDF sem erros
function PdfCard({ item }: { item: any }) {
  // O hook usePDF gera o arquivo em memória e nos dá a URL dele
  const [instance] = usePDF({ document: <FluxoCaixaPDF /> });

  return (
    <a
      href={instance.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white/5 border border-white/10 p-6 rounded-xl transition-all cursor-pointer group hover:bg-white/10 hover:border-monac-blue/50 hover:scale-[1.02] flex flex-col justify-between ${instance.loading ? "opacity-50 pointer-events-none" : ""}`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border text-monac-blue bg-monac-blue/10 border-monac-blue/20">
            {item.type}
          </span>
          <item.icon
            size={20}
            className="text-white/40 group-hover:text-white transition-colors"
          />
        </div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-monac-blue transition-colors leading-tight">
          {item.title}
        </h3>
        <p className="text-xs text-white/40 font-mono flex items-center gap-2 mt-4">
          <Eye size={12} /> {item.duration}{" "}
          {/* Ícone de Olho para indicar visualização */}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-monac-blue transition-colors">
        {instance.loading ? "Preparando..." : item.actionText}{" "}
        <ArrowRight size={12} />
      </div>
    </a>
  );
}

// Componente Principal
export function Academy() {
  return (
    <section
      id="academy"
      className="py-24 bg-monac-ink text-white relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        {/* CABEÇALHO */}
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
              Conteúdo técnico gratuito para te ajudar a entender finanças e
              processos, mesmo que você não seja cliente.
            </p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2">
            Ver Todos os Conteúdos
            <ArrowRight size={14} />
          </button>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contents.map((item) => {
            // Se for o ID 2 (PDF), renderiza o componente especial
            if (item.id === 2) {
              return <PdfCard key={item.id} item={item} />;
            }

            // Cards normais (Vídeos)
            return (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 p-6 rounded-xl transition-all cursor-pointer group hover:bg-white/10 flex flex-col justify-between opacity-60 hover:opacity-100"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border text-white/60 bg-white/5 border-white/10">
                      {item.type}
                    </span>
                    <item.icon
                      size={20}
                      className="text-white/40 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-white transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/40 font-mono flex items-center gap-2 mt-4">
                    <PlayCircle size={12} /> {item.duration}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  {item.actionText} <ArrowRight size={12} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
