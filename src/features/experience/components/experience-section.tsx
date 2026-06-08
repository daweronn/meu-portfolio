import { SectionLabel } from "@/components/ui/section-label";
import {
  getCurrentExperience,
  getPreviousExperiences,
} from "@/services/experience.service";
import { ExperienceCard } from "@/features/experience/components/experience-card";
import { PreviousRoles } from "@/features/experience/components/previous-roles";

export function ExperienceSection() {
  const current = getCurrentExperience();
  const previous = getPreviousExperiences();

  return (
    <section className="space-y-4">
      <SectionLabel>Experiência</SectionLabel>
      {current && <ExperienceCard experience={current} />}
      <PreviousRoles experiences={previous} />
    </section>
  );
}
