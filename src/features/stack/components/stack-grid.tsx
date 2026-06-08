import { SectionLabel } from "@/components/ui/section-label";
import { BrandIcon } from "@/components/ui/brand-icon";
import { getStack } from "@/services/stack.service";

export function StackGrid() {
  const stack = getStack();

  return (
    <section className="space-y-4">
      <SectionLabel>Stack</SectionLabel>
      <ul className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <li key={item.slug} className="group relative transition-[z-index] group-hover:z-10 hover:z-10">
            <div className="inline-flex origin-center items-center gap-1.5 rounded-full border border-border bg-surface/50 px-3 py-1.5 transition-all duration-150 ease-out group-hover:-translate-y-1 group-hover:scale-[1.18] group-hover:border-foreground/20 group-hover:bg-surface group-hover:shadow-md">
              <BrandIcon slug={item.slug} className="size-3.5" />
              <span className="text-xs text-foreground">{item.name}</span>
            </div>
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 translate-y-1.5 scale-90 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] text-background opacity-0 shadow-lg transition-all duration-150 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
