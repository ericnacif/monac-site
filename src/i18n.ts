import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    pt: {
        translation: {
            hero: {
                title_start: "Sua Empresa no",
                title_highlight: "Piloto Automático",
                title_end: ".",
                subtitle: "Pare de perder tempo digitando dados. O Atlas integra Vendas, Estoque e Financeiro em um fluxo contínuo. Uma ação gera múltiplas reações automáticas.",
                cta_primary: "Ver na Prática",
            },
            nav: {
                features: "Funcionalidades",
                pricing: "Planos",
                about: "O Sistema",
                login: "Entrar"
            }
        }
    },
    // Mantive EN/ES como placeholder, mas focando no PT agora
    en: {
        translation: {
            hero: {
                title_start: "Your Business on",
                title_highlight: "Autopilot",
                title_end: ".",
                subtitle: "Stop typing data manually. Atlas integrates Sales, Inventory, and Finance into a continuous flow. One action triggers multiple automatic reactions.",
                cta_primary: "See it in Action",
            },
            nav: {
                features: "Features",
                pricing: "Pricing",
                about: "About",
                login: "Login"
            }
        }
    },
    es: {
        translation: {
            hero: {
                title_start: "Su Empresa en",
                title_highlight: "Piloto Automático",
                title_end: ".",
                subtitle: "Deje de escribir datos manualmente. Atlas integra Ventas, Inventario y Finanzas en un flujo continuo. Una acción genera múltiples reacciones automáticas.",
                cta_primary: "Ver en Práctica",
            },
            nav: {
                features: "Funcionalidades",
                pricing: "Planes",
                about: "Sobre",
                login: "Entrar"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt', // Força Português
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;