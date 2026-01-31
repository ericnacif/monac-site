# 🏛️ MONAC | Institutional Web

> A interface pública e portal de vendas do ecossistema Monac ERP.
> **Status:** 🟡 Pre-Launch (Target: Junho/2026)

---

## 📋 Sobre o Projeto

Este repositório contém o código-fonte da Landing Page de alta performance da Monac Sistemas. O projeto foi desenvolvido com foco em:

- **Performance:** Carregamento instantâneo (Vite + SPA).
- **SEO:** Estrutura semântica e meta-tags otimizadas para "ERP", "Gestão" e "NF-e".
- **UX/UI:** Design System próprio ("Monac Enterprise") com animações fluidas via Framer Motion.

## 🛠 Tech Stack

- **Core:** [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Deploy:** Netlify / Vercel (CI/CD Automático)

---

## 🎨 Design System & Tokens

As cores e fontes estão centralizadas no `tailwind.config.js`.

| Token                | Hex       | Uso Principal                       |
| :------------------- | :-------- | :---------------------------------- |
| **`monac-blue`**     | `#0047BB` | Brand Color, CTAs Primários, Links  |
| **`monac-darkBlue`** | `#003388` | Hover States, Gradientes Profundos  |
| **`monac-ink`**      | `#101820` | Títulos, Textos, Navbar, Footer     |
| **`monac-paper`**    | `#F2F0EB` | Backgrounds Secundários (Off-white) |
| **`font-sans`**      | `Inter`   | Tipografia Geral                    |

---

## 📂 Arquitetura do Projeto

A estrutura foi limpa para manter apenas componentes essenciais em produção.

```text
src/
├── components/          # Componentes Isolados (Atomic Design simplificado)
│   ├── Navbar.tsx       # Mega Menu Responsivo
│   ├── Platform.tsx     # Interactive Deck (Feature Showcase)
│   ├── Pricing.tsx      # Tabela de Planos (Start/Pro/Enterprise)
│   ├── ...              # Outros blocos (Hero, Founders, etc)
├── index.css            # Diretivas Tailwind + Custom Textures (.bg-tech-grid)
├── App.tsx              # Orquestrador das seções e IDs de navegação
└── main.tsx             # Entry Point
```
