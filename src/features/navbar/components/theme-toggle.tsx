"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { getNavbarLabels } from "@/services/navbar.service";
import { useLocale } from "@/hooks/use-locale";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale } = useLocale();
  const labels = getNavbarLabels(locale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <IconButton
      aria-label={labels.theme}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span suppressHydrationWarning>
        {mounted && isDark ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )}
      </span>
    </IconButton>
  );
}
