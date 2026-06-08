import { getSocials } from "@/services/navbar.service";
import { SocialLinks } from "@/features/navbar/components/social-links";
import { LanguageToggle } from "@/features/navbar/components/language-toggle";
import { ThemeToggle } from "@/features/navbar/components/theme-toggle";

export function Navbar() {
  const socials = getSocials();

  return (
    <header className="w-full">
      <div className="container flex h-14 items-center justify-end gap-1">
        <SocialLinks socials={socials} />
        <span className="mx-1 h-5 w-px bg-border" aria-hidden />
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
