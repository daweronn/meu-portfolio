import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { ProjectPreview } from "@/features/projects/components/project-preview";
import type { Project } from "@/features/projects/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      className="group relative flex h-full w-full flex-col gap-3 rounded-xl border border-border bg-background p-3 transition-all duration-150 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.03] hover:border-foreground/20 hover:shadow-lg"
    >
      <ProjectPreview project={project} />
      <div className="flex flex-1 flex-col gap-2 px-1 pb-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-foreground">{project.name}</h3>
          <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {project.year !== undefined && <Tag>{project.year}</Tag>}
        </div>
      </div>
    </a>
  );
}
