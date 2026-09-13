import Image from "next/image";
import { Images } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { Project } from "@/features/projects/types";

interface ProjectPreviewProps {
  project: Project;
  openLabel: string;
  onOpen?: () => void;
}

const frame =
  "relative block aspect-video w-full overflow-hidden rounded-lg border border-border bg-gradient-to-br from-surface to-background";

export function ProjectPreview({ project, openLabel, onOpen }: ProjectPreviewProps) {
  const image = (
    <Image
      src={project.imageUrl}
      alt={project.name}
      fill
      quality={95}
      sizes="(max-width: 640px) 85vw, 320px"
      className="object-cover"
    />
  );

  if (!onOpen) {
    return <div className={frame}>{image}</div>;
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${openLabel}: ${project.name}`}
      className={cn(frame, "group/preview z-10")}
    >
      {image}
      <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-md bg-background/90 px-2 py-1 text-xs text-foreground shadow-sm transition-opacity sm:opacity-0 sm:group-hover/preview:opacity-100">
        <Images className="size-3.5" />
        {openLabel} · {project.gallery.length}
      </span>
    </button>
  );
}
