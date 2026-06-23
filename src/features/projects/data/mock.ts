import type { Project } from "@/features/projects/types";

export const projectsMock: Project[] = [
  {
    id: "resgaty",
    name: "Resgaty",
    headline: "Automação e resgate para criadores de conteúdo",
    description:
      "Plataforma de automações e resgate para criadores de conteúdo. Case de maior destaque: Skorpion Gamer, canal com 7 milhões de inscritos.",
    url: "https://skorpiongamer.com.br",
    imageUrl: "/projetos/resgaty.png",
    technologies: ["Python", "React", "Next.js", "Node.js", "Docker"],
  },
  {
    id: "bebelize",
    name: "Bebelize",
    headline: "Gerador de plantas modulares para enxoval infantil",
    description:
      "Sistema privado de geração de plantas modulares para a Bebelize, fabricante de itens de enxoval infantil.",
    url: "https://www.bebelize.com.br/",
    imageUrl: "/projetos/bebelize.png",
    technologies: ["React", "Next.js", "Supabase"],
  },
  {
    id: "clipou",
    name: "Clipou",
    headline: "Replays automáticos para arenas de futebol society",
    description:
      "Um botão físico (ESP32) na quadra captura os últimos 30s do lance; o backend corta, renderiza com patrocinadores e logo queimados e publica em 16:9 e story 9:16 no site da arena — em segundos, 100% automático.",
    url: "https://clipou.online",
    imageUrl: "/projetos/clipou.png",
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
  },
  {
    id: "pelada-bot",
    name: "Bot da Pelada",
    headline: "Administra o grupo da pelada no WhatsApp",
    description:
      "Bot open source que administra meu grupo de pelada semanal no WhatsApp — organização de jogadores e rotinas do grupo.",
    url: "https://github.com/daweronn/bot-pelada-whatsapp",
    imageUrl: "/projetos/botpelada.png",
    technologies: [],
  },
  {
    id: "fullpage-capture",
    name: "Captura de Página Inteira",
    headline: "Captura de página inteira, estilo Behance",
    description:
      "Extensão de navegador para capturar fotos de página inteira, no estilo dos previews do Behance.",
    url: "https://github.com/daweronn/design-system-capture",
    imageUrl: "/projetos/fullpagecapture.png",
    technologies: [],
  },
];
