import {
  futureLabelsByLocale,
  localizedFutureProjects,
} from "@/features/future/data/mock";
import type { FutureLabels, FutureProject } from "@/features/future/types";
import type { Locale } from "@/types/locale";

export function getFutureProjects(locale: Locale): FutureProject[] {
  return localizedFutureProjects.map(({ content, ...base }) => ({
    ...base,
    ...content[locale],
  }));
}

export function getFutureLabels(locale: Locale): FutureLabels {
  return futureLabelsByLocale[locale];
}
