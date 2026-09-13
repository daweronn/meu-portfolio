"use client";

import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { getNavbarLabels } from "@/services/navbar.service";
import { useLocale } from "@/hooks/use-locale";
import { useThemeTransition } from "@/features/navbar/hooks/use-theme-transition";

export function ThemeToggle() {
  const { locale } = useLocale();
  const labels = getNavbarLabels(locale);
  const toggleTheme = useThemeTransition();

  return (
    <IconButton aria-label={labels.theme} onClick={toggleTheme} className="relative">
      <Sun className="absolute inset-0 m-auto size-4 rotate-90 scale-0 transition-transform duration-500 ease-out dark:rotate-0 dark:scale-100" />
      <Moon className="size-4 rotate-0 scale-100 transition-transform duration-500 ease-out dark:-rotate-90 dark:scale-0" />
    </IconButton>
  );
}
