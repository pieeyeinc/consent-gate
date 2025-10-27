import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { HowItWorks } from "@/components/how-it-works";
import { CMPIntegration } from "@/components/cmp-integration";
import { PricingTable } from "@/components/pricing-table";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <CMPIntegration />
      <PricingTable />
    </>
  );
}