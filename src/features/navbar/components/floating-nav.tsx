"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { SocialLinkItem } from "@/features/navbar/components/social-links";
import { LanguageToggle } from "@/features/navbar/components/language-toggle";
import { ThemeToggle } from "@/features/navbar/components/theme-toggle";
import { useScrolledPast } from "@/features/navbar/hooks/use-scrolled-past";
import type { SocialLink } from "@/features/navbar/types";

const revealOffset = 96;

interface FloatingNavProps {
  socials: SocialLink[];
}

export function FloatingNav({ socials }: FloatingNavProps) {
  const open = useScrolledPast(revealOffset);
  const [hasOpened, setHasOpened] = useState(false);
  if (open && !hasOpened) {
    setHasOpened(true);
  }

  const items: { key: string; node: ReactNode }[] = [
    ...socials.map((social) => ({
      key: social.type,
      node: <SocialLinkItem social={social} />,
    })),
    { key: "divider", node: <span aria-hidden className="mx-0.5 h-5 w-px bg-border" /> },
    { key: "language", node: <LanguageToggle /> },
    { key: "theme", node: <ThemeToggle /> },
  ];

  const state = open ? "open" : hasOpened ? "closed" : "idle";

  return (
    <nav
      aria-hidden={!open}
      inert={!open}
      data-state={state}
      style={{ "--n": items.length } as CSSProperties}
      className="floating-nav fixed right-3 top-3 z-40 flex items-center gap-0.5 rounded-full border border-border bg-background/85 p-1 shadow-lg backdrop-blur-md sm:right-5 sm:top-5"
    >
      {items.map((item, index) => (
        <span
          key={item.key}
          className="floating-nav-item inline-flex items-center"
          style={{ "--i": index } as CSSProperties}
        >
          {item.node}
        </span>
      ))}
    </nav>
  );
}
