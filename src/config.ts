/**
 * =============================================
 * MONAC — CONFIGURAÇÃO CENTRAL
 * Altere aqui, reflete em todo o site.
 * =============================================
 */

export const SITE_CONFIG = {
  name: "Monac ERP",
  tagline: "O Sistema Operacional da sua Empresa",
  url: "https://monac.com.br",
  email: "monacsistemas@gmail.com",

  whatsapp: {
    primary: "5533997088999",
    secondary: "5533984286959",
    url: "https://wa.me/5533997088999",
    urlSecondary: "https://wa.me/5533984286959",
    display: {
      primary: "(33) 99708-8999",
      secondary: "(33) 98428-6959",
    },
  },

  social: {
    instagram: "https://www.instagram.com/monac_sistemas",
    linkedin: "https://www.linkedin.com/company/monac-sistemas/about/?viewAsMember=true",
  },

  founders: {
    augusto: {
      name: "Augusto Moreira",
      role: "Co-Founder & Business",
      linkedin: "https://www.linkedin.com/in/augusto-moreira-28176331a/",
      avatar: "https://ui-avatars.com/api/?name=Augusto+Moreira&background=0D8ABC&color=fff",
    },
    eric: {
      name: "Eric Nacif",
      role: "Co-Founder & Tech",
      linkedin: "https://www.linkedin.com/in/eric-nacif-956930324/",
      avatar: "https://ui-avatars.com/api/?name=Eric+Nacif&background=0047BB&color=fff",
    },
  },

  pdf: {
    siteUrl: "https://monac.com.br",
    cnpj: "59.088.662/0001-57",
  },
} as const;

// Helper para abrir WhatsApp
export const openWhatsApp = (message?: string) => {
  const base = SITE_CONFIG.whatsapp.url;
  const url = message ? `${base}?text=${encodeURIComponent(message)}` : base;
  window.open(url, "_blank", "noopener,noreferrer");
};
