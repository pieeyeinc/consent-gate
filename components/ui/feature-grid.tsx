"use client"

import { Shield, Zap, CheckCircle, Globe, BarChart3, Headphones } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Built to meet the strictest privacy regulations including the 2025 German court ruling on GTM consent."
  },
  {
    icon: Zap,
    title: "Zero-Code Setup",
    description: "Simply change your GTM script URL. No complex integrations or code changes required."
  },
  {
    icon: CheckCircle,
    title: "Universal Compatibility",
    description: "Works with any Consent Management Platform (CMP) - OneTrust, Didomi, Cookiebot, and more."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Powered by AWS CloudFront for lightning-fast performance worldwide with 99.9%+ uptime."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track consent rates, user behavior, and compliance metrics with detailed reporting."
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Get help from our privacy compliance experts with priority support and dedicated account management."
  }
]

export function FeatureGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose ConsentGate?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The only consent-aware proxy designed specifically for Google Tag Manager compliance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-brand-primary/10 rounded-lg">
                  <feature.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
