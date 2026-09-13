import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { GalleryImage } from "@/features/projects/types";

interface GalleryThumbnailsProps {
  images: GalleryImage[];
  active: number;
  onSelect: (index: number) => void;
}

export function GalleryThumbnails({
  images,
  active,
  onSelect,
}: GalleryThumbnailsProps) {
  return (
    <ol className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto p-1">
      {images.map((image, index) => (
        <li key={image.src} className="shrink-0">
          <button
            type="button"
            aria-label={image.caption}
            aria-current={index === active}
            onClick={() => onSelect(index)}
            className={cn(
              "relative block aspect-video w-20 overflow-hidden rounded-md border transition-opacity sm:w-24",
              index === active
                ? "border-foreground opacity-100"
                : "border-border opacity-60 hover:opacity-100",
            )}
          >
            <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
          </button>
        </li>
      ))}
    </ol>
  );
}
