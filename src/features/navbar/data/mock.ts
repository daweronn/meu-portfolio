import type { NavbarLabels, SocialLink } from "@/features/navbar/types";
import type { Locale } from "@/types/locale";

export const socialsMock: SocialLink[] = [
  {
    type: "github",
    label: "GitHub",
    href: "https://github.com/daweronn",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/davidvicter",
  },
  {
    type: "email",
    label: "Email",
    href: "mailto:davidfelicio2402@gmail.com",
  },
];

export const navbarLabelsByLocale: Record<Locale, NavbarLabels> = {
  pt: {
    language: "Alterar idioma",
    theme: "Alternar tema",
  },
  en: {
    language: "Change language",
    theme: "Toggle theme",
  },
};
