"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
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
            How ConsentGate Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A server-side proxy that intercepts GTM requests and only forwards them 
            to Google after consent is verified.
          </motion.p>
        </div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
                ConsentGate Flow (GDPR Compliant)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Step 1: Browser */}
                <div className="text-center">
                  <div className="w-16 h-16 gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Browser Request</h4>
                  <p className="text-gray-600 text-sm">
                    User visits your site, browser requests GTM script
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="text-teal-500" size={32} />
                </div>

                {/* Step 2: ConsentGate */}
                <div className="text-center">
                  <div className="w-16 h-16 gradient-coral rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">ConsentGate Proxy</h4>
                  <p className="text-gray-600 text-sm">
                    Checks consent status via cookie/header
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="text-teal-500" size={32} />
                </div>

                {/* Step 3: Decision */}
                <div className="text-center">
                  <div className="w-16 h-16 gradient-teal-coral rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Routing</h4>
                  <p className="text-gray-600 text-sm">
                    Routes to Google (with consent) or empty script (without)
                  </p>
                </div>
              </div>

              {/* Decision Tree */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="text-green-500 mx-auto mb-3" size={32} />
                    <h4 className="font-semibold text-gray-900 mb-2">With Consent</h4>
                    <p className="text-gray-600 text-sm">
                      Forwards request to Google with stripped headers
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-gray-50">
                  <CardContent className="p-6 text-center">
                    <Shield className="text-gray-500 mx-auto mb-3" size={32} />
                    <h4 className="font-semibold text-gray-900 mb-2">Without Consent</h4>
                    <p className="text-gray-600 text-sm">
                      Returns empty script, no data transfer
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h3>
            <p className="text-gray-600">
              No personal data leaves your domain until explicit consent is granted
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-12 h-12 gradient-coral rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              CloudFront CDN ensures sub-100ms response times globally
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-12 h-12 gradient-teal-coral rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Drop-in Solution</h3>
            <p className="text-gray-600">
              One line change to your existing GTM implementation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
