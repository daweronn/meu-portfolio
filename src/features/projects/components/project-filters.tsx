"use client";

import { Search, X } from "lucide-react";
import { FilterDropdown } from "@/features/projects/components/filter-dropdown";
import type { FilterOption, ProjectLabels } from "@/features/projects/types";

interface ProjectFiltersProps {
  query: string;
  onQueryChange: (value: string) => void;
  technologyOptions: FilterOption[];
  selectedTechnologies: string[];
  onToggleTechnology: (value: string) => void;
  onClearTechnologies: () => void;
  hasFilters: boolean;
  onClearAll: () => void;
  labels: ProjectLabels;
}

export function ProjectFilters({
  query,
  onQueryChange,
  technologyOptions,
  selectedTechnologies,
  onToggleTechnology,
  onClearTechnologies,
  hasFilters,
  onClearAll,
  labels,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={labels.searchPlaceholder}
          className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-border"
        />
      </div>
      <div className="flex items-center gap-2">
        <FilterDropdown
          label={labels.technology}
          clearLabel={labels.clearFilters}
          options={technologyOptions}
          selected={selectedTechnologies}
          onToggle={onToggleTechnology}
          onClear={onClearTechnologies}
        />
        {hasFilters && (
          <button
            type="button"
            aria-label={labels.clearAll}
            onClick={onClearAll}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
