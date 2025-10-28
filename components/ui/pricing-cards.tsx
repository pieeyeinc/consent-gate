"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small websites and blogs",
    features: [
      "100,000 requests/month",
      "Basic consent detection",
      "CloudFront CDN",
      "Email support",
      "99.9% uptime SLA",
      "1 domain included"
    ],
    limitations: [
      "No advanced analytics",
      "No API access"
    ],
    href: "https://app.consentgate.io/sign-up",
    popular: false
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "1,000,000 requests/month",
      "Advanced consent detection",
      "CloudFront CDN",
      "Priority support",
      "99.95% uptime SLA",
      "Advanced analytics",
      "Up to 5 custom domains",
      "API access",
      "Webhook integrations"
    ],
    limitations: [],
    href: "https://app.consentgate.io/sign-up",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "/month",
    description: "For large organizations with complex needs",
    features: [
      "10,000,000 requests/month",
      "Custom consent flows",
      "Dedicated CloudFront distribution",
      "24/7 phone support",
      "99.99% uptime SLA",
      "Custom analytics",
      "Unlimited domains",
      "Advanced API access",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees"
    ],
    limitations: [],
    href: "https://app.consentgate.io/sign-up",
    popular: false
  }
]

export function PricingCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the plan that fits your needs. All plans include our core consent management features.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'border-brand-primary shadow-lg' : 'border-gray-200'}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-lg">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-start">
                        <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-6">
                  <Button 
                    asChild 
                    className={`w-full text-lg py-6 ${
                      plan.popular 
                        ? 'brand-button' 
                        : 'brand-button-secondary'
                    }`}
                  >
                    <Link href={plan.href}>
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-500">
            Need a custom plan? <Link href="mailto:support@pii.ai" className="text-brand-primary hover:underline">Contact our sales team</Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
