import type { Locale } from "@/types/locale";

export interface Project {
  id: string;
  name: string;
  headline: string;
  description: string;
  url: string;
  technologies: string[];
  logoUrl?: string;
  imageUrl?: string;
}

export interface FilterOption {
  value: string;
  label: string;
  count: number;
}

export interface ProjectBase {
  id: string;
  url: string;
  imageUrl: string;
  technologies: string[];
}

export interface ProjectContent {
  name: string;
  headline: string;
  description: string;
}

export interface LocalizedProject extends ProjectBase {
  content: Record<Locale, ProjectContent>;
}

export interface ProjectLabels {
  section: string;
  searchPlaceholder: string;
  technology: string;
  clearFilters: string;
  clearAll: string;
  seeMore: string;
  seeLess: string;
  empty: string;
  previous: string;
  next: string;
}
