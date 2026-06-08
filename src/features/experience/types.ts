export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogoUrl?: string;
  locationType: string;
  startYear: number;
  endYear?: number;
  description: string;
  technologies: string[];
  current: boolean;
}
