import { localizedProjects } from "@/features/projects/data/mock";
import { galleriesByProject } from "@/features/projects/data/galleries";
import { projectLabelsByLocale } from "@/features/projects/data/labels";
import type {
  FilterOption,
  Project,
  ProjectLabels,
} from "@/features/projects/types";
import type { Locale } from "@/types/locale";

const assetsPath = "/projetos";

function resolveGallery(
  id: string,
  locale: Locale,
): Pick<Project, "gallery" | "repoUrl"> {
  const entry = galleriesByProject[id];
  return {
    repoUrl: entry?.repoUrl ?? undefined,
    gallery: (entry?.gallery ?? []).map((image) => ({
      src: `${assetsPath}/${id}/${image.file}`,
      caption: image.caption[locale],
    })),
  };
}

export function getProjects(locale: Locale): Project[] {
  return localizedProjects.map(({ content, ...base }) => ({
    ...base,
    ...content[locale],
    imageUrl: `${assetsPath}/${base.id}/cover.webp`,
    ...resolveGallery(base.id, locale),
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
