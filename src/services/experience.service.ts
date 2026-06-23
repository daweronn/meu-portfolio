import {
  experienceLabelsByLocale,
  experiencesByLocale,
} from "@/features/experience/data/mock";
import type { Experience, ExperienceLabels } from "@/features/experience/types";
import type { Locale } from "@/types/locale";

export function getCurrentExperience(locale: Locale): Experience | undefined {
  return experiencesByLocale[locale].find((experience) => experience.current);
}

export function getPreviousExperiences(locale: Locale): Experience[] {
  return experiencesByLocale[locale].filter((experience) => !experience.current);
}

export function getExperienceLabels(locale: Locale): ExperienceLabels {
  return experienceLabelsByLocale[locale];
}
