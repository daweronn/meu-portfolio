export type SocialType = "github" | "linkedin" | "email";

export interface SocialLink {
  type: SocialType;
  label: string;
  href: string;
}

export interface NavbarLabels {
  language: string;
  theme: string;
}
