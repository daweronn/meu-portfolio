import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface/50 px-2 py-0.5 text-xs font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
