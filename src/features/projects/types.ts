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
