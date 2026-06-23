import type { Profile } from "@/features/profile/types";
import type { Locale } from "@/types/locale";

export const profileByLocale: Record<Locale, Profile> = {
  pt: {
    name: "David Felicio",
    bio: "Desenvolvedor fullstack. Construo marketplaces, ERPs, automações e produtos web sob medida — do backend à interface. A complexidade reduzida à sua forma mais simples.",
    avatarUrl: "/eu.png",
    location: {
      city: "Rio de Janeiro",
      country: "Brasil",
      countryCode: "br",
    },
  },
  en: {
    name: "David Felicio",
    bio: "Fullstack developer. I build marketplaces, ERPs, automations and custom web products — from backend to interface. Complexity reduced to its simplest form.",
    avatarUrl: "/eu.png",
    location: {
      city: "Rio de Janeiro",
      country: "Brazil",
      countryCode: "br",
    },
  },
};
