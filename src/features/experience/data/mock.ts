import type { Experience } from "@/features/experience/types";

export const experiencesMock: Experience[] = [
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
];
