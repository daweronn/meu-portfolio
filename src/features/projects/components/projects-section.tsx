import { SectionLabel } from "@/components/ui/section-label";
import { getProjects, getTechnologyOptions } from "@/services/projects.service";
import { ProjectsExplorer } from "@/features/projects/components/projects-explorer";

export function ProjectsSection() {
  return (
    <section className="space-y-5">
      <SectionLabel>Projetos recentes</SectionLabel>
      <ProjectsExplorer
        projects={getProjects()}
        technologyOptions={getTechnologyOptions()}
      />
    </section>
  );
}
