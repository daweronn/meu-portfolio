import { BrandIcon } from "@/components/ui/brand-icon";
import { CompanyLogo } from "@/features/experience/components/company-logo";
import type { Experience, ExperienceLabels } from "@/features/experience/types";

interface ExperienceTimelineItemProps {
  experience: Experience;
  labels: ExperienceLabels;
}

function formatPeriod(experience: Experience, present: string): string {
  return `${experience.startYear} — ${experience.endYear ?? present}`;
}

export function ExperienceTimelineItem({
  experience,
  labels,
}: ExperienceTimelineItemProps) {
  return (
    <li className="relative">
      <span className="absolute -left-7 top-1.5 size-2 rounded-full bg-border ring-4 ring-background" />
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-foreground">{experience.role}</h3>
          <p className="text-xs uppercase tracking-label text-muted">
            {formatPeriod(experience, labels.present)}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <CompanyLogo company={experience.company} src={experience.companyLogoUrl} />
          <div className="text-sm leading-tight">
            <p className="text-foreground">{experience.company}</p>
            <p className="text-muted">{experience.locationType}</p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {experience.description}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-muted">
        {experience.technologies.map((slug) => (
          <BrandIcon key={slug} slug={slug} monochrome className="size-4" />
        ))}
      </div>
    </li>
  );
}
