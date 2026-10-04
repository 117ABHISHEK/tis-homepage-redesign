import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import SportsSection from "@/components/sections/SportsSection";
import RankingsSection from "@/components/sections/RankingsSection";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <StatsSection />
      <SportsSection />
      <RankingsSection />
    </main>
  );
}