import type { Project } from "@/features/projects/types";

export const projectsMock: Project[] = [
  {
    id: "resgaty",
    name: "Resgaty",
    headline: "Automação e resgate para criadores de conteúdo",
    description:
      "Plataforma de automações e resgate para criadores de conteúdo. Case de maior destaque: Skorpion Gamer, canal com 7 milhões de inscritos.",
    url: "#",
    technologies: ["Python", "React", "Next.js", "Node.js", "Docker"],
  },
  {
    id: "bebelize",
    name: "Bebelize",
    headline: "Gerador de plantas modulares para enxoval infantil",
    description:
      "Sistema privado de geração de plantas modulares para a Bebelize, fabricante de itens de enxoval infantil.",
    url: "#",
    technologies: ["React", "Next.js", "Supabase"],
  },
  {
    id: "arenasociety",
    name: "ArenaSociety",
    headline: "Replay automático para arenas de society",
    description:
      "Sistema 100% automático de captura e geração de replays em arenas de society.",
    url: "#",
    technologies: ["Python", "Node.js", "React", "Docker", "PostgreSQL"],
  },
  {
    id: "pelada-bot",
    name: "Bot da Pelada",
    headline: "Administra o grupo da pelada no WhatsApp",
    description:
      "Bot open source que administra meu grupo de pelada semanal no WhatsApp — organização de jogadores e rotinas do grupo.",
    url: "#",
    technologies: [],
  },
  {
    id: "fullpage-capture",
    name: "Captura de Página Inteira",
    headline: "Captura de página inteira, estilo Behance",
    description:
      "Extensão de navegador para capturar fotos de página inteira, no estilo dos previews do Behance.",
    url: "#",
    technologies: [],
  },
];
