import { PricingCards } from '@/components/ui/pricing-cards'
import { CTASection } from '@/components/ui/cta-section'
import { motion } from "framer-motion"

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingCards />
      <CTASection />
    </div>
  )
}

