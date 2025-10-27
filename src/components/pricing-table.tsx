"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PricingTable() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small websites and blogs",
      features: [
        "Up to 10,000 requests/month",
        "Basic consent detection",
        "CloudFront CDN",
        "Email support",
        "99.9% uptime SLA",
        "Standard analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "$199",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 requests/month",
        "Advanced consent detection",
        "CloudFront CDN",
        "Priority support",
        "99.95% uptime SLA",
        "Advanced analytics",
        "Custom domains",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited requests",
        "Custom consent detection",
        "Global CDN",
        "Dedicated support",
        "99.99% uptime SLA",
        "Custom analytics",
        "White-label solution",
        "SLA guarantees",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Start with a free trial. No setup fees, no hidden costs. 
            Scale as you grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-teal-coral text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'border-teal-500 shadow-lg' : 'border-gray-200'}`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'gradient-teal-coral text-white hover:opacity-90' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <p className="text-sm text-gray-600">14-day free trial</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-coral rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <p className="text-sm text-gray-600">No setup fees</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-teal-coral rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <p className="text-sm text-gray-600">Cancel anytime</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <p className="text-sm text-gray-600">GDPR compliant</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
