import LandingAboutSection from "@/components/molecules/landing/LandingAboutSection";
import LandingHeroSection from "@/components/molecules/landing/LandingHeroSection";
import LandingProjectSection from "@/components/molecules/landing/LandingProjectSection";
import LandingSkillSection from "@/components/molecules/landing/LandingSkillSection";
import LandingWorkSection from "@/components/molecules/landing/LandingWorkSection";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] space-y-10">
        <LandingHeroSection />
        <LandingAboutSection />
        <LandingSkillSection />
        <LandingWorkSection />
        <LandingProjectSection />
      </div>
    </>
  );
}
