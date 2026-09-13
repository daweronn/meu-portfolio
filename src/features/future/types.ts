import type { Locale } from "@/types/locale";

export interface FutureProjectContent {
  status: string;
  headline: string;
  description: string;
}

export interface LocalizedFutureProject {
  id: string;
  name: string;
  logoUrl: string;
  content: Record<Locale, FutureProjectContent>;
}

export interface FutureProject extends FutureProjectContent {
  id: string;
  name: string;
  logoUrl: string;
}

export interface FutureLabels {
  section: string;
}
