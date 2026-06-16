import Image from "next/image";

interface ProfileAvatarProps {
  name: string;
  src: string;
}

export function ProfileAvatar({ name, src }: ProfileAvatarProps) {
  return (
    <Image
      src={src}
      alt={name}
      width={2048}
      height={2048}
      priority
      sizes="240px"
      className="aspect-square w-auto shrink-0 self-stretch rounded-xl object-cover"
    />
  );
}
