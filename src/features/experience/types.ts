export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogoUrl?: string;
  locationType: string;
  website?: string;
  startYear: number;
  endYear?: number;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface ExperienceLabels {
  section: string;
  current: string;
  present: string;
  previousRoles: string;
}
