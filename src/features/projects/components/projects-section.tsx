"use client";

import { SectionLabel } from "@/components/ui/section-label";
import {
  getProjectLabels,
  getProjects,
  getTechnologyOptions,
} from "@/services/projects.service";
import { ProjectsExplorer } from "@/features/projects/components/projects-explorer";
import { useLocale } from "@/hooks/use-locale";

export function ProjectsSection() {
  const { locale } = useLocale();
  const labels = getProjectLabels(locale);

  return (
    <section className="space-y-5">
      <SectionLabel>{labels.section}</SectionLabel>
      <ProjectsExplorer
        projects={getProjects(locale)}
        technologyOptions={getTechnologyOptions(locale)}
        labels={labels}
      />
    </section>
  );
}
