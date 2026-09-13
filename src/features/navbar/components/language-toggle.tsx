"use client";

import { flushSync } from "react-dom";
import { IconButton } from "@/components/ui/icon-button";
import { getNavbarLabels } from "@/services/navbar.service";
import { useLocale } from "@/hooks/use-locale";
import { runViewTransition } from "@/lib/utils/view-transition";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const labels = getNavbarLabels(locale);
  const next = locale === "pt" ? "en" : "pt";

  return (
    <IconButton
      aria-label={labels.language}
      onClick={() =>
        runViewTransition("locale", () => flushSync(() => setLocale(next)))
      }
    >
      {locale.toUpperCase()}
    </IconButton>
  );
}
