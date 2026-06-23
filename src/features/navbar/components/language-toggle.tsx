"use client";

import { IconButton } from "@/components/ui/icon-button";
import { getNavbarLabels } from "@/services/navbar.service";
import { useLocale } from "@/hooks/use-locale";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const labels = getNavbarLabels(locale);

  return (
    <IconButton
      aria-label={labels.language}
      onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
    >
      {locale.toUpperCase()}
    </IconButton>
  );
}
