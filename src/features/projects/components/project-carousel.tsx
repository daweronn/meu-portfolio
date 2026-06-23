"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { ProjectCard } from "@/features/projects/components/project-card";
import type { Project } from "@/features/projects/types";

interface ProjectCarouselProps {
  projects: Project[];
}

type Direction = 1 | -1;

interface CarouselButtonProps {
  direction: Direction;
  disabled: boolean;
  onScroll: (direction: Direction) => void;
}

function CarouselButton({ direction, disabled, onScroll }: CarouselButtonProps) {
  const Icon = direction === 1 ? ChevronRight : ChevronLeft;

  return (
    <button
      type="button"
      aria-label={direction === 1 ? "Próximos projetos" : "Projetos anteriores"}
      disabled={disabled}
      onClick={() => onScroll(direction)}
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors",
        disabled
          ? "cursor-not-allowed text-muted/30"
          : "text-muted hover:bg-surface hover:text-foreground",
      )}
    >
      <Icon className="size-4" />
    </button>
  );
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setAtStart(scrollLeft <= 1);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [projects]);

  function scroll(direction: Direction) {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    track.scrollBy({ left: direction * track.clientWidth * 0.9, behavior: "smooth" });
  }

  if (projects.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border py-12 text-center text-sm text-muted">
        Nenhum projeto encontrado.
      </p>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <CarouselButton direction={-1} disabled={atStart} onScroll={scroll} />
      <div
        ref={trackRef}
        className="no-scrollbar -my-6 flex min-w-0 flex-1 snap-x snap-mandatory items-start overflow-x-auto scroll-smooth py-8"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex w-[calc(100%/3)] shrink-0 snap-start px-2"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <CarouselButton direction={1} disabled={atEnd} onScroll={scroll} />
    </div>
  );
}
