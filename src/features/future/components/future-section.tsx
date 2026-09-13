"use client";

import { SectionLabel } from "@/components/ui/section-label";
import { getFutureLabels, getFutureProjects } from "@/services/future.service";
import { FutureProjectCard } from "@/features/future/components/future-project-card";
import { useLocale } from "@/hooks/use-locale";

export function FutureSection() {
  const { locale } = useLocale();
  const labels = getFutureLabels(locale);

  return (
    <section className="space-y-4">
      <SectionLabel>{labels.section}</SectionLabel>
      <div className="space-y-3">
        {getFutureProjects(locale).map((project) => (
          <FutureProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
