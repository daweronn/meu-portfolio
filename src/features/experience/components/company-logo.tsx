import Image from "next/image";

interface CompanyLogoProps {
  company: string;
  src?: string;
}

export function CompanyLogo({ company, src }: CompanyLogoProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={company}
        width={28}
        height={28}
        className="size-7 rounded-md object-contain"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="flex size-7 items-center justify-center rounded-md bg-surface text-xs text-foreground"
    >
      {company.charAt(0)}
    </div>
  );
}
