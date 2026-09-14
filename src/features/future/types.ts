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
  housesPortfolio: boolean;
  content: Record<Locale, FutureProjectContent>;
}

export interface FutureProject extends FutureProjectContent {
  id: string;
  name: string;
  logoUrl: string;
  housesPortfolio: boolean;
}

export interface PortfolioThumb {
  src: string;
  name: string;
}

export interface FutureLabels {
  section: string;
  portfolio: string;
}
