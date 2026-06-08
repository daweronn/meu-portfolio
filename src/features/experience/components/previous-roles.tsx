"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { ExperienceTimelineItem } from "@/features/experience/components/experience-timeline-item";
import type { Experience } from "@/features/experience/types";

interface PreviousRolesProps {
  experiences: Experience[];
}

export function PreviousRoles({ experiences }: PreviousRolesProps) {
  const [open, setOpen] = useState(false);

  if (experiences.length === 0) {
    return null;
  }

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
      >
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
        Cargos anteriores
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ol className="relative ml-1 mt-6 space-y-6 border-l border-border pl-6">
            {experiences.map((experience) => (
              <ExperienceTimelineItem key={experience.id} experience={experience} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
