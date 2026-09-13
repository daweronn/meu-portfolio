"use client";

import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Lock, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { IconButton } from "@/components/ui/icon-button";
import { GalleryThumbnails } from "@/features/projects/components/gallery-thumbnails";
import { useGalleryTrack } from "@/features/projects/hooks/use-gallery-track";
import type { Project, ProjectLabels } from "@/features/projects/types";

interface ProjectGalleryProps {
  project: Project;
  labels: ProjectLabels;
  onClose: () => void;
}

const navButton =
  "absolute top-1/2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-opacity hover:bg-background disabled:opacity-0 sm:flex";

const linkButton =
  "inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm transition-colors";

export function ProjectGallery({ project, labels, onClose }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { gallery } = project;
  const { trackRef, index, goTo, onScroll } = useGalleryTrack(gallery.length);
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowRight") goTo(index + 1);
    if (event.key === "ArrowLeft") goTo(index - 1);
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) close();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={project.name}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
      className="m-0 h-dvh max-h-none w-full max-w-none bg-background p-0 text-foreground backdrop:bg-black/60 backdrop:backdrop-blur-sm sm:m-auto sm:h-auto sm:max-h-[92dvh] sm:w-[min(64rem,92vw)] sm:rounded-xl sm:border sm:border-border"
    >
      <div className="flex h-full flex-col gap-4 p-4 sm:p-5">
        <header className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-foreground">{project.name}</h3>
            <p className="text-xs text-muted">
              {index + 1} / {gallery.length}
            </p>
          </div>
          <IconButton aria-label={labels.closeGallery} onClick={close}>
            <X className="size-4" />
          </IconButton>
        </header>
        <div className="flex flex-1 flex-col justify-center gap-3 sm:flex-none">
          <div className="relative">
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-lg border border-border bg-surface"
            >
              {gallery.map((image, position) => (
                <figure key={image.src} className="relative aspect-video w-full shrink-0 snap-center">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    priority={position === 0}
                    quality={95}
                    sizes="(max-width: 640px) 100vw, 64rem"
                    className="object-contain"
                  />
                </figure>
              ))}
            </div>
            <button
              type="button"
              aria-label={labels.previousImage}
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
              className={cn(navButton, "left-3")}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label={labels.nextImage}
              disabled={index === gallery.length - 1}
              onClick={() => goTo(index + 1)}
              className={cn(navButton, "right-3")}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
          <p className="min-h-10 text-sm leading-relaxed text-muted">
            {gallery[index]?.caption}
          </p>
          <GalleryThumbnails images={gallery} active={index} onSelect={goTo} />
        </div>
        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(linkButton, "bg-foreground text-background hover:bg-foreground/90")}
            >
              <Github className="size-4" />
              {labels.viewRepository}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <Lock className="size-4" />
              {labels.privateRepository}
            </span>
          )}
          {project.url !== project.repoUrl && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                linkButton,
                project.repoUrl
                  ? "border border-border text-foreground hover:bg-surface"
                  : "bg-foreground text-background hover:bg-foreground/90",
              )}
            >
              {labels.visitProject}
              <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </footer>
      </div>
    </dialog>
  );
}
