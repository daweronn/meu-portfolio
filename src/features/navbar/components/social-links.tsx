import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import type { SocialLink, SocialType } from "@/features/navbar/types";

const iconByType: Record<SocialType, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

interface SocialLinksProps {
  socials: SocialLink[];
}

export function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <ul className="flex items-center gap-0.5">
      {socials.map((social) => {
        const Icon = iconByType[social.type];
        const isExternal = social.href.startsWith("http");

        return (
          <li key={social.type}>
            <a
              href={social.href}
              aria-label={social.label}
              {...(isExternal && { target: "_blank", rel: "noreferrer" })}
              className="inline-flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <Icon className="size-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
