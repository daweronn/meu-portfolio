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
          <li key={item.slug} className="group transition-[z-index] group-hover:z-10 hover:z-10">
            <div className="inline-flex origin-center items-center gap-1.5 rounded-full border border-border bg-surface/50 px-3 py-1.5 transition-all duration-150 ease-out group-hover:-translate-y-1 group-hover:scale-[1.18] group-hover:border-foreground/20 group-hover:bg-surface group-hover:shadow-md">
              <BrandIcon slug={item.slug} className="size-4" />
              <span className="text-[0.8625rem] text-foreground">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
