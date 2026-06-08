"use client";

import { useState } from "react";
import { IconButton } from "@/components/ui/icon-button";

const languages = ["PT", "EN"] as const;

type Language = (typeof languages)[number];

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("PT");

  return (
    <IconButton
      aria-label="Alterar idioma"
      onClick={() =>
        setLanguage((current) => (current === "PT" ? "EN" : "PT"))
      }
    >
      {language}
    </IconButton>
  );
}
