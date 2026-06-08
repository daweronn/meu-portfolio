import { profileMock } from "@/features/profile/data/mock";
import type { Profile } from "@/features/profile/types";

export function getProfile(): Profile {
  return profileMock;
}
