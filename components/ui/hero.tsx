"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pt-[250px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Make Google Tag Manager{" "}
            <span className="gradient-text">Compliant</span>{" "}
            — Automatically
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            ConsentGate is the first consent-aware proxy for GTM, ensuring no data 
            is sent to Google until user consent is granted. Based on the 2025 German 
            court ruling.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="text-lg px-8 py-6 brand-button">
              <Link href="https://app.consentgate.io/sign-up">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 brand-button-secondary">
              <Link href="https://app.consentgate.io/sign-in">
                Log In
              </Link>
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <Shield className="h-6 w-6 text-brand-primary" />
              <span className="text-gray-700 font-medium">Based on 2025 German Ruling</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <Zap className="h-6 w-6 text-brand-secondary" />
              <span className="text-gray-700 font-medium">Zero-code Setup</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-gray-700 font-medium">Works with Any CMP</span>
            </div>
          </div>
        </div>

        {/* Animated Illustration */}
        <div className="mt-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  How ConsentGate Works
                </h3>
                <p className="text-gray-600">
                  Your GTM requests are automatically blocked until consent is granted
                </p>
              </div>
              
              {/* Flow Diagram */}
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-red-600 font-bold text-sm">❌</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">No Consent</p>
                  <p className="text-xs text-gray-500">GTM Blocked</p>
                </div>
                
                <div className="flex-1 h-0.5 bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 mx-4"></div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-yellow-600 font-bold text-sm">⏳</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">User Consents</p>
                  <p className="text-xs text-gray-500">Via CMP</p>
                </div>
                
                <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-200 to-green-200 mx-4"></div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold text-sm">✅</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Traffic Flows</p>
                  <p className="text-xs text-gray-500">GTM Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
