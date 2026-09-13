import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import type { FutureProject } from "@/features/future/types";

interface FutureProjectCardProps {
  project: FutureProject;
}

export function FutureProjectCard({ project }: FutureProjectCardProps) {
  return (
    <article className="flex gap-4 rounded-xl border border-border bg-background p-5">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
        <Image src={project.logoUrl} alt="" width={32} height={32} className="size-8" />
      </div>
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg text-foreground">{project.name}</h3>
          <Tag className="gap-1.5 border-accent/30 bg-accent/10 text-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            {project.status}
          </Tag>
        </div>
        <p className="text-xs uppercase tracking-label text-muted">
          {project.headline}
        </p>
        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
    </article>
  );
}
