"use client";

import { useProjectFilters } from "@/features/projects/hooks/use-project-filters";
import { ProjectFilters } from "@/features/projects/components/project-filters";
import { ProjectCarousel } from "@/features/projects/components/project-carousel";
import type { FilterOption, Project } from "@/features/projects/types";

interface ProjectsExplorerProps {
  projects: Project[];
  technologyOptions: FilterOption[];
}

export function ProjectsExplorer({
  projects,
  technologyOptions,
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
      />
      <ProjectCarousel projects={filters.filtered} />
    </div>
  );
}
