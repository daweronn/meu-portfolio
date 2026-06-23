import type { ProjectLabels } from "@/features/projects/types";
import type { Locale } from "@/types/locale";

export const projectLabelsByLocale: Record<Locale, ProjectLabels> = {
  pt: {
    section: "Projetos recentes",
    searchPlaceholder: "Filtrar projetos...",
    technology: "Tecnologia",
    clearFilters: "Limpar filtros",
    clearAll: "Limpar todos os filtros",
    seeMore: "Ver mais",
    seeLess: "Ver menos",
    empty: "Nenhum projeto encontrado.",
    previous: "Projetos anteriores",
    next: "Próximos projetos",
  },
  en: {
    section: "Recent projects",
    searchPlaceholder: "Filter projects...",
    technology: "Technology",
    clearFilters: "Clear filters",
    clearAll: "Clear all filters",
    seeMore: "See more",
    seeLess: "See less",
    empty: "No projects found.",
    previous: "Previous projects",
    next: "Next projects",
  },
};
