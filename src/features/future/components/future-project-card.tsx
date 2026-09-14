import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import type { FutureProject, PortfolioThumb } from "@/features/future/types";

interface FutureProjectCardProps {
  project: FutureProject;
  portfolio: PortfolioThumb[];
  portfolioLabel: string;
}

export function FutureProjectCard({
  project,
  portfolio,
  portfolioLabel,
}: FutureProjectCardProps) {
  const showPortfolio = project.housesPortfolio && portfolio.length > 0;

  return (
    <article className="reveal relative overflow-hidden rounded-xl border border-border bg-background p-5 sm:p-6">
      <div
        aria-hidden
        className="ignis-ember pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-[radial-gradient(circle,hsl(var(--ignis-1)/0.22),hsl(var(--ignis-2)/0.08)_45%,transparent_70%)]"
      />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface shadow-sm">
          <Image
            src={project.logoUrl}
            alt=""
            width={40}
            height={40}
            className="ignis-flame size-10"
          />
        </div>
        <div className="min-w-0 flex-1 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl tracking-tight text-foreground">{project.name}</h3>
            <Tag className="gap-1.5 border-accent/30 bg-accent/10 text-accent">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              {project.status}
            </Tag>
          </div>
          <p className="text-xs uppercase tracking-label text-muted">
            {project.headline}
          </p>
          <p className="text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>
      </div>
      {showPortfolio && (
        <div className="relative mt-5 flex items-center gap-3 border-t border-border pt-4">
          <ul className="flex -space-x-3">
            {portfolio.map((item) => (
              <li
                key={item.src}
                title={item.name}
                className="relative aspect-video w-14 overflow-hidden rounded-md border-2 border-background bg-surface shadow-sm transition-transform duration-200 hover:z-10 hover:-translate-y-1 hover:scale-110"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted">{portfolioLabel}</p>
        </div>
      )}
    </article>
  );
}
