import type {
  FutureLabels,
  LocalizedFutureProject,
} from "@/features/future/types";
import type { Locale } from "@/types/locale";

export const localizedFutureProjects: LocalizedFutureProject[] = [
  {
    id: "ignis-stack",
    name: "Ignis Stack",
    logoUrl: "/ignis-stack.svg",
    content: {
      pt: {
        status: "Em breve",
        headline: "Holding de software",
        description:
          "Uma marca própria para reunir todos os softwares que já desenvolvi até aqui — e os que ainda estão por vir.",
      },
      en: {
        status: "Coming soon",
        headline: "Software holding",
        description:
          "A brand of its own to bring together every piece of software I've built so far — and the ones still to come.",
      },
    },
  },
];

export const futureLabelsByLocale: Record<Locale, FutureLabels> = {
  pt: { section: "Futuros projetos" },
  en: { section: "Upcoming projects" },
};
