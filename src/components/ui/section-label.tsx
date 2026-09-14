import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="reveal text-sm font-medium uppercase tracking-label text-muted">
      {children}
    </h2>
  );
}
