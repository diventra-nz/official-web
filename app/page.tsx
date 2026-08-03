import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import AIFeature from "@/components/sections/AIFeature";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DeliveryCommitments from "@/components/sections/DeliveryCommitments";
import FeaturedCaseStudy from "@/components/sections/FeaturedCaseStudy";
import Industries from "@/components/sections/Industries";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <AIFeature />
      <WhyChooseUs />
      <DeliveryCommitments />
      <FeaturedCaseStudy />
      <Industries />
      <FinalCTA />
    </>
  );
}
