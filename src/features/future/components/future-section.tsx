"use client";

import { SectionLabel } from "@/components/ui/section-label";
import { getFutureLabels, getFutureProjects } from "@/services/future.service";
import { getProjects } from "@/services/projects.service";
import { FutureProjectCard } from "@/features/future/components/future-project-card";
import { useLocale } from "@/hooks/use-locale";

export function FutureSection() {
  const { locale } = useLocale();
  const labels = getFutureLabels(locale);
  const portfolio = getProjects(locale).map(({ imageUrl, name }) => ({
    src: imageUrl,
    name,
  }));
  const portfolioLabel = labels.portfolio.replace("{count}", String(portfolio.length));

  return (
    <section className="space-y-4">
      <SectionLabel>{labels.section}</SectionLabel>
      <div className="space-y-3">
        {getFutureProjects(locale).map((project) => (
          <FutureProjectCard
            key={project.id}
            project={project}
            portfolio={portfolio}
            portfolioLabel={portfolioLabel}
          />
        ))}
      </div>
    </section>
  );
}
