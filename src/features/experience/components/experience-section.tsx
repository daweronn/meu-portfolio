"use client";

import { SectionLabel } from "@/components/ui/section-label";
import {
  getCurrentExperience,
  getExperienceLabels,
  getPreviousExperiences,
} from "@/services/experience.service";
import { ExperienceCard } from "@/features/experience/components/experience-card";
import { PreviousRoles } from "@/features/experience/components/previous-roles";
import { useLocale } from "@/hooks/use-locale";

export function ExperienceSection() {
  const { locale } = useLocale();
  const labels = getExperienceLabels(locale);
  const current = getCurrentExperience(locale);
  const previous = getPreviousExperiences(locale);

  return (
    <section className="space-y-4">
      <SectionLabel>{labels.section}</SectionLabel>
      {current && <ExperienceCard experience={current} labels={labels} />}
      <PreviousRoles experiences={previous} labels={labels} />
    </section>
  );
}
