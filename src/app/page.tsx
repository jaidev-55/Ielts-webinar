import AgendaSection from "@/components/sections/AgendaSection";
import BrochureSection from "@/components/sections/BrochureSection";
import CountriesSection from "@/components/sections/CountriesSection";
import CTAAndFooter from "@/components/sections/CTAAndFooter";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StickyHeader from "@/components/StickyHeader";
import WhoWeAreSections from "@/components/sections/WhoWeAreSections";

const Home = () => {
  return (
    <div className="">
      <main className="overflow-x-hidden">
        <StickyHeader visible={true} />
        <HeroSection />
        <StatsSection />
        <AgendaSection />
        <TestimonialsSection />
        <CountriesSection />
        <BrochureSection />
        <WhoWeAreSections />
        <FAQSection />
        <CTAAndFooter />
      </main>
    </div>
  );
};

export default Home;
