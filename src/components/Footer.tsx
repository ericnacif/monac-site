export function Footer() {
    return (
        <footer className="bg-atlas-ink text-atlas-paper py-20 border-t border-atlas-ink/10">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Coluna 1: Marca */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-8 w-8 bg-atlas-paper text-atlas-ink flex items-center justify-center font-serif text-lg font-bold">
                            A
                        </div>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase">Atlas ERP</span>
                    </div>
                    <p className="text-xs text-atlas-paper/60 leading-relaxed">
                        A estrutura invisível que organiza o caos e impulsiona o crescimento de grandes negócios.
                    </p>
                </div>

                {/* Coluna 2: Links */}
                <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-atlas-paper/40 mb-6">Produto</h4>
                    <ul className="space-y-4 text-xs text-atlas-paper/80">
                        <li><a href="#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
                        <li><a href="#pricing" className="hover:text-white transition-colors">Planos</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                    </ul>
                </div>

                {/* Coluna 3: Empresa */}
                <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-atlas-paper/40 mb-6">Empresa</h4>
                    <ul className="space-y-4 text-xs text-atlas-paper/80">
                        <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                    </ul>
                </div>

                {/* Coluna 4: Contato / Local */}
                <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-atlas-paper/40 mb-6">Localização</h4>
                    <address className="text-xs text-atlas-paper/80 not-italic leading-relaxed">
                        Manhuaçu, MG - Brasil<br />
                        suporte@atlas.sys<br />
                        +55 (33) 98456-1234
                    </address>
                </div>

            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-atlas-paper/30 font-mono uppercase tracking-widest">
                <span>© 2026 Atlas Systems.</span>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}