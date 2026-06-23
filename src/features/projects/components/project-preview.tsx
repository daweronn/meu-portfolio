import Image from "next/image";
import type { Project } from "@/features/projects/types";

interface ProjectPreviewProps {
  project: Project;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-gradient-to-br from-surface to-background">
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 85vw, 320px"
          className="object-cover"
        />
      )}
    </div>
  );
}
