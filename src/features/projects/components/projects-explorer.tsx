"use client";

import { useProjectFilters } from "@/features/projects/hooks/use-project-filters";
import { ProjectFilters } from "@/features/projects/components/project-filters";
import { ProjectCarousel } from "@/features/projects/components/project-carousel";
import type {
  FilterOption,
  Project,
  ProjectLabels,
} from "@/features/projects/types";

interface ProjectsExplorerProps {
  projects: Project[];
  technologyOptions: FilterOption[];
  labels: ProjectLabels;
}

export function ProjectsExplorer({
  projects,
  technologyOptions,
  labels,
}: ProjectsExplorerProps) {
  const filters = useProjectFilters(projects);

  return (
    <div className="space-y-5">
      <ProjectFilters
        query={filters.query}
        onQueryChange={filters.setQuery}
        technologyOptions={technologyOptions}
        selectedTechnologies={filters.selectedTechnologies}
        onToggleTechnology={filters.toggleTechnology}
        onClearTechnologies={filters.clearTechnologies}
        hasFilters={filters.hasFilters}
        onClearAll={filters.clearAll}
        labels={labels}
      />
      <ProjectCarousel projects={filters.filtered} labels={labels} />
    </div>
  );
}
