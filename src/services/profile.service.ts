import { profileByLocale } from "@/features/profile/data/mock";
import type { Profile } from "@/features/profile/types";
import type { Locale } from "@/types/locale";

export function getProfile(locale: Locale): Profile {
  return profileByLocale[locale];
}
