"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Eye, Database, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            The 2025 German Court Ruling Changed Everything
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The Hannover Regional Court ruled that Google Tag Manager violates GDPR 
            by transferring personal data to Google servers before consent is obtained.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Problem Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Traditional CMPs Aren't Enough
            </h3>
            
            <div className="space-y-6">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="text-red-500 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Data Leaks Before Consent</h4>
                      <p className="text-gray-600">
                        GTM loads immediately when the page loads, sending IP addresses, 
                        referrer data, and device fingerprints to Google before users can consent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Eye className="text-orange-500 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Consent Bypass</h4>
                      <p className="text-gray-600">
                        Even with consent management platforms, GTM executes tracking 
                        code before the CMP can block it, creating a legal liability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Database className="text-yellow-600 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Massive Fines</h4>
                      <p className="text-gray-600">
                        GDPR violations can result in fines up to 4% of annual revenue 
                        or €20 million, whichever is higher.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                Current GTM Flow (Problematic)
              </h4>
              
              <div className="space-y-4">
                {/* Browser */}
                <div className="flex items-center justify-center">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                    🌐 Browser
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-red-500"></div>
                </div>
                
                {/* GTM */}
                <div className="flex items-center justify-center">
                  <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-medium">
                    ⚠️ Google Tag Manager
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-red-500"></div>
                </div>
                
                {/* Google Servers */}
                <div className="flex items-center justify-center">
                  <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-medium">
                    🚨 Google Servers (Data Transfer!)
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-red-600 font-medium">
                  ❌ Personal data sent before consent
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
