import { localizedProjects } from "@/features/projects/data/mock";
import { projectLabelsByLocale } from "@/features/projects/data/labels";
import type {
  FilterOption,
  Project,
  ProjectLabels,
} from "@/features/projects/types";
import type { Locale } from "@/types/locale";

export function getProjects(locale: Locale): Project[] {
  return localizedProjects.map(({ content, ...base }) => ({
    ...base,
    ...content[locale],
  }));
}

function buildOptions(values: string[]): FilterOption[] {
  const counts = new Map<string, number>();
  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return Array.from(counts, ([value, count]) => ({ value, label: value, count }));
}

export function getTechnologyOptions(locale: Locale): FilterOption[] {
  const options = buildOptions(
    getProjects(locale).flatMap((project) => project.technologies),
  );
  return options.sort((a, b) => b.count - a.count);
}

export function getProjectLabels(locale: Locale): ProjectLabels {
  return projectLabelsByLocale[locale];
}
