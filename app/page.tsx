import { Hero } from '@/components/ui/hero'
import { FeatureGrid } from '@/components/ui/feature-grid'
import { CTASection } from '@/components/ui/cta-section'
import { ConsentFlowDiagram } from '@/components/ui/consent-flow-diagram'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ConsentFlowDiagram />
      <CTASection />
    </>
  )
}

