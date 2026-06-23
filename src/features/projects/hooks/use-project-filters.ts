"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/features/projects/types";

function toggleValue(values: string[], value: string): string[] {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

export function useProjectFilters(projects: Project[]) {
  const [query, setQuery] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesQuery =
        term === "" ||
        project.name.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term);
      const matchesTech =
        selectedTechnologies.length === 0 ||
        project.technologies.some((tech) => selectedTechnologies.includes(tech));
      return matchesQuery && matchesTech;
    });
  }, [projects, query, selectedTechnologies]);

  const hasFilters = query !== "" || selectedTechnologies.length > 0;

  return {
    query,
    setQuery,
    selectedTechnologies,
    toggleTechnology: (value: string) =>
      setSelectedTechnologies((prev) => toggleValue(prev, value)),
    clearTechnologies: () => setSelectedTechnologies([]),
    filtered,
    hasFilters,
    clearAll: () => {
      setQuery("");
      setSelectedTechnologies([]);
    },
  };
}
