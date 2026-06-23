import type { LocalizedProject } from "@/features/projects/types";

export const localizedProjects: LocalizedProject[] = [
  {
    id: "resgaty",
    url: "https://skorpiongamer.com.br",
    imageUrl: "/projetos/fit/resgaty.png",
    technologies: ["Python", "React", "Next.js", "Node.js", "Docker"],
    content: {
      pt: {
        name: "Resgaty",
        headline: "Automação e resgate para criadores de conteúdo",
        description:
          "Plataforma de automações e resgate para criadores de conteúdo. Case de maior destaque: Skorpion Gamer, canal com 7 milhões de inscritos.",
      },
      en: {
        name: "Resgaty",
        headline: "Automation and giveaways for content creators",
        description:
          "Automation and giveaway platform for content creators. Flagship case: Skorpion Gamer, a channel with 7 million subscribers.",
      },
    },
  },
  {
    id: "bebelize",
    url: "https://www.bebelize.com.br/",
    imageUrl: "/projetos/fit/bebelize.png",
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
    imageUrl: "/projetos/fit/clipou.png",
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
    imageUrl: "/projetos/fit/botpelada.png",
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
    url: "https://github.com/daweronn/design-system-capture",
    imageUrl: "/projetos/fit/fullpagecapture.png",
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
