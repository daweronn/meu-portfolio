import { navbarLabelsByLocale, socialsMock } from "@/features/navbar/data/mock";
import type { NavbarLabels, SocialLink } from "@/features/navbar/types";
import type { Locale } from "@/types/locale";

export function getSocials(): SocialLink[] {
  return socialsMock;
}

export function getNavbarLabels(locale: Locale): NavbarLabels {
  return navbarLabelsByLocale[locale];
}
