import { getProfile } from "@/services/profile.service";
import { ProfileAvatar } from "@/features/profile/components/profile-avatar";

export function ProfileIntro() {
  const profile = getProfile();
  const { location } = profile;

  return (
    <section className="flex items-stretch gap-5 sm:gap-6">
      <ProfileAvatar name={profile.name} src={profile.avatarUrl} />
      <div className="flex max-w-md flex-col justify-center gap-2">
        <h1 className="text-2xl tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="text-base leading-relaxed text-muted">{profile.bio}</p>
        <p className="flex items-center gap-2 pt-1 text-sm text-muted">
          <span
            className={`fi fi-${location.countryCode} rounded-[2px]`}
            aria-hidden
          />
          {location.city}, {location.country}
        </p>
      </div>
    </section>
  );
}
