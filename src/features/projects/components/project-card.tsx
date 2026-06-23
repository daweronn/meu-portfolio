"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Tag } from "@/components/ui/tag";
import { ProjectPreview } from "@/features/projects/components/project-preview";
import { useClampOverflow } from "@/features/projects/hooks/use-clamp-overflow";
import { useExpandHeight } from "@/features/projects/hooks/use-expand-height";
import type { Project } from "@/features/projects/types";

const collapsedBodyHeight = "6.5rem";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { ref: bodyRef, expanded, toggle } =
    useExpandHeight<HTMLDivElement>(collapsedBodyHeight);
  const { ref: descriptionRef, overflowing } =
    useClampOverflow<HTMLParagraphElement>(!expanded);

  const hasTechnologies = project.technologies.length > 0;
  const canToggle = overflowing || hasTechnologies;

  return (
    <div className="group relative flex w-full flex-col gap-3 rounded-xl border border-border bg-background p-3 transition-all duration-150 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.03] hover:border-foreground/20 hover:shadow-lg">
      <ProjectPreview project={project} />
      <div ref={bodyRef} className="flex flex-col gap-2 overflow-hidden px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-foreground">{project.name}</h3>
          <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p
          ref={descriptionRef}
          className={cn(
            "text-sm leading-relaxed text-muted",
            !expanded && "line-clamp-3",
          )}
        >
          {project.description}
        </p>
        {expanded && hasTechnologies && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}
      </div>
      {canToggle && (
        <button
          type="button"
          onClick={toggle}
          className="relative z-10 self-start px-1 text-xs font-medium text-foreground/70 transition-colors hover:text-foreground"
        >
          {expanded ? "Ver menos" : "Ver mais"}
        </button>
      )}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={project.name}
        className="absolute inset-0 z-0 rounded-xl"
      />
    </div>
  );
}
