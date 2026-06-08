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
      width={160}
      height={160}
      priority
      className="size-32 shrink-0 rounded-lg object-cover sm:size-40"
    />
  );
}
