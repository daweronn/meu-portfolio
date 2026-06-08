import { brandIcons } from "@/lib/brand-icons/registry";

interface BrandIconProps {
  slug: string;
  className?: string;
  monochrome?: boolean;
}

export function BrandIcon({ slug, className, monochrome = false }: BrandIconProps) {
  const icon = brandIcons[slug];

  if (!icon) {
    return null;
  }

  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox={icon.viewBox}
      fill={monochrome ? "currentColor" : `#${icon.hex}`}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
