import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import SportsSection from "@/components/sections/SportsSection";
import RankingsSection from "@/components/sections/RankingsSection";
import PersonalitiesSection from "@/components/sections/PersonalitiesSection";
import AwardsSection from "@/components/sections/AwardsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <StatsSection />
      <SportsSection />
      <RankingsSection />
      <PersonalitiesSection />
      <AwardsSection />
      <TestimonialsSection />
    </main>
  );
}