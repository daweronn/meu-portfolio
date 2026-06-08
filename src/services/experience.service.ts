import { experiencesMock } from "@/features/experience/data/mock";
import type { Experience } from "@/features/experience/types";

export function getCurrentExperience(): Experience | undefined {
  return experiencesMock.find((experience) => experience.current);
}

export function getPreviousExperiences(): Experience[] {
  return experiencesMock.filter((experience) => !experience.current);
}
