import { ProfileIntro } from "@/features/profile/components/profile-intro";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { StackGrid } from "@/features/stack/components/stack-grid";

export default function HomePage() {
  return (
    <main className="container space-y-16 pb-16 pt-6 sm:pb-24 sm:pt-10">
      <ProfileIntro />
      <ExperienceSection />
      <ProjectsSection />
      <StackGrid />
    </main>
  );
}
