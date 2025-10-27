"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 to-coral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Make Google Tag Manager{" "}
            <span className="gradient-teal-coral-text">Legal Again</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
          >
            A privacy-first GTM proxy that prevents data transfer before consent — 
            in compliance with the 2025 German court ruling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="gradient-teal-coral text-white hover:opacity-90 text-lg px-8 py-3">
              See How It Works
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              View Pricing
            </Button>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600">Prevents data leaks before consent is granted</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 gradient-coral rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">CloudFront CDN ensures sub-100ms response times</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 gradient-teal-coral rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drop-in Solution</h3>
              <p className="text-gray-600">One line change to your existing GTM setup</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
