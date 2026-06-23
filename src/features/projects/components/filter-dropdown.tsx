"use client";

import { useRef, useState } from "react";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useClickOutside } from "@/hooks/use-click-outside";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import type { FilterOption } from "@/features/projects/types";

interface FilterDropdownProps {
  label: string;
  clearLabel: string;
  options: FilterOption[];
  selected: string[];
  onToggle: (value: string) => void;
  onClear: () => void;
}

export function FilterDropdown({
  label,
  clearLabel,
  options,
  selected,
  onToggle,
  onClear,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const visible = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div ref={ref} className="relative">
      <Button
        variant="secondary"
        onClick={() => setOpen((value) => !value)}
      >
        <Plus className="size-4 text-muted" />
        <span>{label}</span>
        {selected.map((value) => (
          <Tag key={value} className="border-foreground/10 bg-surface text-foreground">
            {value}
          </Tag>
        ))}
      </Button>
      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 w-56 rounded-lg border border-border bg-background p-1 shadow-lg">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={label}
            className="mb-1 w-full rounded-md bg-surface px-2.5 py-1.5 text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
          <ul className="max-h-56 overflow-auto">
            {visible.map((option) => {
              const checked = selected.includes(option.value);
              return (
                <li key={option.value}>
                  <button
                    type="button"
                    onClick={() => onToggle(option.value)}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-surface"
                  >
                    <span
                      className={cn(
                        "flex size-4 items-center justify-center rounded border border-border",
                        checked && "border-foreground bg-foreground text-background",
                      )}
                    >
                      {checked && <Check className="size-3" />}
                    </span>
                    <span className="flex-1 text-left">{option.label}</span>
                    <span className="text-xs text-muted">{option.count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={onClear}
            className="mt-1 w-full border-t border-border px-2 py-1.5 text-center text-sm text-muted transition-colors hover:text-foreground"
          >
            {clearLabel}
          </button>
        </div>
      )}
    </div>
  );
}
