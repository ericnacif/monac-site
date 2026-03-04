/**
 * =============================================
 * MONAC — SISTEMA DE TIPOGRAFIA
 * Brand Guideline 2026
 * =============================================
 *
 * HIERARQUIA TIPOGRÁFICA:
 *
 * 1. HEADINGS (h1–h4)
 *    Fonte: Century Gothic (via CSS var --font-heading)
 *    Maiúsculo → font-weight: 700 (Bold)
 *    Minúsculo → font-weight: 400 (Regular)
 *    Classe Tailwind helper: font-heading-upper | font-heading-lower
 *
 * 2. SUBTÍTULOS E CORPO DE TEXTO
 *    Fonte: Poppins
 *    Maiúsculo → font-weight: 500 (Medium)
 *    Minúsculo → font-weight: 300 (Light)
 *    Tailwind: font-sans (já configurado como Poppins)
 *    Helpers: font-sub-upper | font-body-lower
 *
 * 3. NÚMEROS
 *    Fonte: Glacial Indifference
 *    Peso: SEMPRE 400 (Regular) — NUNCA bold
 *    Classe: font-number | stat-number
 *
 * 4. LABELS DE SEÇÃO / BADGES
 *    Fonte: Poppins 600
 *    Tamanho: 10px (0.625rem)
 *    UPPERCASE + tracking 0.2em
 *    Classe: label-brand | section-label
 *
 * =============================================
 * PALETA DE CORES:
 *
 * Azul principal:   #0047BB  → text-monac-blue / bg-monac-blue
 * Azul escuro:      #003388  → text-monac-darkBlue
 * Tinta (preto):    #101820  → text-monac-ink
 * Papel (fundo):    #F2F0EB  → bg-monac-paper / text-monac-paper
 * Cinza:            #D4D4D8  → bg-monac-gray
 *
 * =============================================
 * EXEMPLOS DE USO:
 *
 * // Título de seção padrão
 * <span className="section-label">Diagnóstico</span>
 * <h2 className="section-title">Sua empresa cresceu.</h2>
 * <p className="section-subtitle">Texto do corpo...</p>
 *
 * // Número em destaque (ex: preços, stats)
 * <span className="stat-number">R$ 142.590</span>
 *          ↑ Glacial Indifference Regular
 *
 * // Badge/pill
 * <div className="brand-pill">Monac ERP 2026</div>
 *
 * // Botões
 * <button className="btn-monac-primary">Falar com Consultor</button>
 * <button className="btn-monac-outline">Ver Demo</button>
 *
 * // Cards
 * <div className="card-monac p-8">...</div>
 *
 * =============================================
 * REGRAS IMPORTANTES DO GUIA:
 *
 * ✅ Sempre incluir ™ no logo MONAC
 * ✅ Altura mínima do logo: 8mm
 * ✅ Números: Glacial Indifference Regular (NUNCA bold)
 * ✅ 3 cores permitidas para o logo: #0047BB, branco, #101820
 * ✅ Símbolo do tucano sempre com ™
 * ❌ Não usar outras cores sem aprovação de Eric Nacif
 * ❌ Não alterar proporções do logo
 *
 * =============================================
 */

// Exporta as constantes para uso em JS/TS
export const MONAC_BRAND = {
  colors: {
    blue: "#0047BB",
    darkBlue: "#003388",
    ink: "#101820",
    paper: "#F2F0EB",
    gray: "#D4D4D8",
    white: "#FFFFFF",
  },
  fonts: {
    heading: "'Century Gothic', Futura, 'Trebuchet MS', sans-serif",
    body: "'Poppins', sans-serif",
    numbers: "'Glacial Indifference', Outfit, sans-serif",
  },
  fontWeights: {
    headingUpper: 700,  // Century Gothic Bold — maiúsculo
    headingLower: 400,  // Century Gothic Regular — minúsculo
    subUpper: 500,      // Poppins Medium — maiúsculo
    subLower: 300,      // Poppins Light — minúsculo
    numbers: 400,       // Glacial Indifference Regular — SEMPRE
  },
} as const;
