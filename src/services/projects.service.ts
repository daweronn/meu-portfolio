import { projectsMock } from "@/features/projects/data/mock";
import type { FilterOption, Project } from "@/features/projects/types";

export function getProjects(): Project[] {
  return projectsMock;
}

function buildOptions(values: string[]): FilterOption[] {
  const counts = new Map<string, number>();
  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return Array.from(counts, ([value, count]) => ({ value, label: value, count }));
}

export function getTechnologyOptions(): FilterOption[] {
  const options = buildOptions(projectsMock.flatMap((project) => project.technologies));
  return options.sort((a, b) => b.count - a.count);
}

export function getYearOptions(): FilterOption[] {
  const years = projectsMock
    .map((project) => project.year)
    .filter((year): year is number => year !== undefined)
    .map(String);
  const options = buildOptions(years);
  return options.sort((a, b) => Number(b.value) - Number(a.value));
}
