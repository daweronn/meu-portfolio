import { socialsMock } from "@/features/navbar/data/mock";
import type { SocialLink } from "@/features/navbar/types";

export function getSocials(): SocialLink[] {
  return socialsMock;
}
