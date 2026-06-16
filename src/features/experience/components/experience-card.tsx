import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/ui/brand-icon";
import { CompanyLogo } from "@/features/experience/components/company-logo";
import type { Experience } from "@/features/experience/types";

interface ExperienceCardProps {
  experience: Experience;
}

function formatPeriod(experience: Experience): string {
  const end = experience.endYear ?? "Presente";
  return `${experience.startYear} — ${end}`;
}

function formatWebsite(url: string): string {
  return url.replace(/^https?:\/\//, "");
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="relative rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground/20">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          {experience.current && (
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-label text-accent">
              <span className="size-1.5 rounded-full bg-accent" />
              Atualmente
            </span>
          )}
          <div className="space-y-1">
            <h3 className="text-lg text-foreground">{experience.role}</h3>
            <p className="text-xs uppercase tracking-label text-muted">
              {formatPeriod(experience)}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <CompanyLogo company={experience.company} src={experience.companyLogoUrl} />
          <div className="text-sm leading-tight">
            <p className="text-foreground">{experience.company}</p>
            <p className="text-muted">{experience.locationType}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {experience.description}
      </p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3 text-muted">
          {experience.technologies.map((slug) => (
            <BrandIcon key={slug} slug={slug} monochrome className="size-4" />
          ))}
        </div>
        {experience.website && (
          <a
            href={experience.website}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-foreground before:absolute before:inset-0"
          >
            {formatWebsite(experience.website)}
            <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
