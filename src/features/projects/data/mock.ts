import type { LocalizedProject } from "@/features/projects/types";

export const localizedProjects: LocalizedProject[] = [
  {
    id: "resgaty",
    url: "https://skorpiongamer.com.br",
    technologies: ["Python", "React", "Next.js", "Node.js", "Docker"],
    content: {
      pt: {
        name: "Resgaty",
        headline: "Automação e resgate para criadores de conteúdo",
        description:
          "Plataforma de automações e resgate para criadores de conteúdo. Case de maior destaque: canal com 7 milhões de inscritos.",
      },
      en: {
        name: "Resgaty",
        headline: "Automation and giveaways for content creators",
        description:
          "Automation and giveaway platform for content creators. Flagship case: a channel with 7 million subscribers.",
      },
    },
  },
  {
    id: "copiloto-balcao",
    url: "https://nexit.tech",
    technologies: ["Electron", "React", "TypeScript", "Node.js", "SQLite", "Supabase", ".NET"],
    content: {
      pt: {
        name: "Copiloto de Balcão",
        headline: "Copiloto de IA para o balcão da farmácia",
        description:
          "Integrado ao ERP Farmasoft: o balconista bipa o produto e o painel sugere o que agregar à venda, com argumento e preço, oferece o genérico da mesma fórmula e alerta controlados — em milissegundos, mesmo sem internet. Case: rede de farmácias com 30 mil SKUs classificados.",
      },
      en: {
        name: "Counter Copilot",
        headline: "AI copilot for the pharmacy counter",
        description:
          "Integrated with the Farmasoft ERP: the clerk scans a product and the panel suggests what to add to the sale, with a pitch and price, offers the generic with the same formula and flags controlled drugs — in milliseconds, even offline. Case: a pharmacy chain with 30,000 SKUs classified.",
      },
    },
  },
  {
    id: "gestao-rede",
    url: "https://nexit.tech",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Electron"],
    content: {
      pt: {
        name: "Gestão de Rede",
        headline: "Painel de gestão da rede de farmácias",
        description:
          "O painel onde supervisão e gerência decidem o que o balcão oferece: foco de venda por categoria, regras, catálogo e desempenho por loja, com acesso por papel. A decisão chega a cada PDV em segundos.",
      },
      en: {
        name: "Chain Management",
        headline: "Management dashboard for the pharmacy chain",
        description:
          "The dashboard where supervisors and managers decide what the counter offers: sales focus by category, rules, catalog and per-store performance, with role-based access. Every decision reaches each POS in seconds.",
      },
    },
  },
  {
    id: "bebelize",
    url: "https://www.bebelize.com.br/",
    technologies: ["React", "Next.js", "Supabase"],
    content: {
      pt: {
        name: "Bebelize",
        headline: "Gerador de plantas modulares para enxoval infantil",
        description:
          "Sistema privado de geração de plantas modulares para a Bebelize, fabricante de itens de enxoval infantil.",
      },
      en: {
        name: "Bebelize",
        headline: "Modular layout generator for baby essentials",
        description:
          "Private system that generates modular layouts for Bebelize, a manufacturer of baby essentials.",
      },
    },
  },
  {
    id: "clipou",
    url: "https://clipou.online",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "ESP32",
      "FFmpeg",
      "Redis",
      "Supabase/PostgreSQL",
      "Cloudflare R2",
    ],
    content: {
      pt: {
        name: "Clipou",
        headline: "Replays automáticos para arenas de futebol society",
        description:
          "Um botão físico (ESP32) na quadra captura os últimos 30s do lance; o backend corta, renderiza com patrocinadores e logo queimados e publica em 16:9 e story 9:16 no site da arena — em segundos, 100% automático.",
      },
      en: {
        name: "Clipou",
        headline: "Automatic replays for society soccer arenas",
        description:
          "A physical button (ESP32) on the field captures the last 30s of the play; the backend trims, renders it with sponsors and logo burned in and publishes it in 16:9 and 9:16 story on the arena's website — in seconds, 100% automatic.",
      },
    },
  },
  {
    id: "pelada-bot",
    url: "https://github.com/daweronn/bot-pelada-whatsapp",
    technologies: [],
    content: {
      pt: {
        name: "Bot da Pelada",
        headline: "Administra o grupo da pelada no WhatsApp",
        description:
          "Bot open source que administra meu grupo de pelada semanal no WhatsApp — organização de jogadores e rotinas do grupo.",
      },
      en: {
        name: "Pickup Game Bot",
        headline: "Runs the pickup game group on WhatsApp",
        description:
          "Open source bot that runs my weekly pickup game group on WhatsApp — player organization and group routines.",
      },
    },
  },
  {
    id: "fullpage-capture",
    url: "https://github.com/daweronn/webdev-extension",
    technologies: [],
    content: {
      pt: {
        name: "Captura de Página Inteira",
        headline: "Captura de página inteira, estilo Behance",
        description:
          "Extensão de navegador para capturar fotos de página inteira, no estilo dos previews do Behance.",
      },
      en: {
        name: "Full Page Capture",
        headline: "Full-page capture, Behance style",
        description:
          "Browser extension to capture full-page screenshots, in the style of Behance previews.",
      },
    },
  },
];
