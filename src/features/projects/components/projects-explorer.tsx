"use client";

import { useProjectFilters } from "@/features/projects/hooks/use-project-filters";
import { ProjectFilters } from "@/features/projects/components/project-filters";
import { ProjectCarousel } from "@/features/projects/components/project-carousel";
import type { FilterOption, Project } from "@/features/projects/types";

interface ProjectsExplorerProps {
  projects: Project[];
  technologyOptions: FilterOption[];
  yearOptions: FilterOption[];
}

export function ProjectsExplorer({
  projects,
  technologyOptions,
  yearOptions,
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
        yearOptions={yearOptions}
        selectedYears={filters.selectedYears}
        onToggleYear={filters.toggleYear}
        onClearYears={filters.clearYears}
        hasFilters={filters.hasFilters}
        onClearAll={filters.clearAll}
      />
      <ProjectCarousel projects={filters.filtered} />
    </div>
  );
}
