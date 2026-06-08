import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function IconButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
