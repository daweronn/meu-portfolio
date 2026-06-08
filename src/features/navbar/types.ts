export type SocialType = "github" | "linkedin" | "email";

export interface SocialLink {
  type: SocialType;
  label: string;
  href: string;
}
