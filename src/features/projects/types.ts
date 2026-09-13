import type { Locale } from "@/types/locale";

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  name: string;
  headline: string;
  description: string;
  url: string;
  technologies: string[];
  imageUrl: string;
  repoUrl?: string;
  gallery: GalleryImage[];
}

export interface FilterOption {
  value: string;
  label: string;
  count: number;
}

export interface ProjectBase {
  id: string;
  url: string;
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

export interface LocalizedGalleryImage {
  file: string;
  caption: Record<Locale, string>;
}

export interface ProjectGallery {
  repoUrl: string | null;
  gallery: LocalizedGalleryImage[];
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
  openGallery: string;
  closeGallery: string;
  previousImage: string;
  nextImage: string;
  viewRepository: string;
  privateRepository: string;
  visitProject: string;
}
