import type { Experience, ExperienceLabels } from "@/features/experience/types";
import type { Locale } from "@/types/locale";

export const experiencesByLocale: Record<Locale, Experience[]> = {
  pt: [
    {
      id: "nexit",
      role: "Desenvolvedor Fullstack",
      company: "Nexit",
      companyLogoUrl: "/nexit.png",
      locationType: "Freelance · Remoto",
      website: "https://nexit.tech",
      startYear: 2024,
      description:
        "Presto serviço de desenvolvimento fullstack para a Nexit desde 2024 — sistemas web sob medida, do backend à interface, com foco em automação e em entregar o essencial sem ruído.",
      technologies: ["typescript", "react", "nextdotjs", "nodejs", "postgresql"],
      current: true,
    },
    {
      id: "skorpion-gamer",
      role: "Desenvolvedor Fullstack",
      company: "Skorpion Gamer",
      companyLogoUrl: "/skorp.png",
      locationType: "Remoto",
      startYear: 2025,
      endYear: 2026,
      description:
        "Desenvolvimento do sistema de automações e resgate do canal Skorpion Gamer (7 milhões de inscritos), da infraestrutura à interface.",
      technologies: ["python", "react", "nextdotjs", "nodejs", "docker"],
      current: false,
    },
  ],
  en: [
    {
      id: "nexit",
      role: "Fullstack Developer",
      company: "Nexit",
      companyLogoUrl: "/nexit.png",
      locationType: "Freelance · Remote",
      website: "https://nexit.tech",
      startYear: 2024,
      description:
        "I've been providing fullstack development services for Nexit since 2024 — custom web systems, from backend to interface, focused on automation and on delivering the essentials without noise.",
      technologies: ["typescript", "react", "nextdotjs", "nodejs", "postgresql"],
      current: true,
    },
    {
      id: "skorpion-gamer",
      role: "Fullstack Developer",
      company: "Skorpion Gamer",
      companyLogoUrl: "/skorp.png",
      locationType: "Remote",
      startYear: 2025,
      endYear: 2026,
      description:
        "Built the automation and giveaway system for the Skorpion Gamer channel (7 million subscribers), from infrastructure to interface.",
      technologies: ["python", "react", "nextdotjs", "nodejs", "docker"],
      current: false,
    },
  ],
};

export const experienceLabelsByLocale: Record<Locale, ExperienceLabels> = {
  pt: {
    section: "Experiência",
    current: "Atualmente",
    present: "Presente",
    previousRoles: "Cargos anteriores",
  },
  en: {
    section: "Experience",
    current: "Currently",
    present: "Present",
    previousRoles: "Previous roles",
  },
};
