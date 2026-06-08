import type { Experience } from "@/features/experience/types";

export const experiencesMock: Experience[] = [
  {
    id: "current",
    role: "Desenvolvedor de Software Fullstack",
    company: "Empresa Atual",
    locationType: "Remoto",
    startYear: 2024,
    description:
      "Desenvolvimento de aplicações web full stack, do backend à interface, com foco em simplicidade, performance e experiência do usuário.",
    technologies: ["typescript", "react", "nodejs", "postgresql"],
    current: true,
  },
  {
    id: "previous-1",
    role: "Desenvolvedor Frontend",
    company: "Empresa Anterior",
    locationType: "Híbrido",
    startYear: 2022,
    endYear: 2024,
    description:
      "Construção de interfaces acessíveis e responsivas, colaborando com design e produto para entregar features de ponta a ponta.",
    technologies: ["javascript", "react", "tailwindcss"],
    current: false,
  },
];
