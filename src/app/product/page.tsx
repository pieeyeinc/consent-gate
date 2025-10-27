"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Shield, Zap, CheckCircle } from "lucide-react";

export default function ProductPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Technical Details
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Deep dive into how ConsentGate's server-side proxy architecture 
              ensures GDPR compliance while maintaining performance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Architecture Overview
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Built on AWS CloudFront and Lambda@Edge for global performance 
              and enterprise-grade reliability.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Architecture Diagram */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Request Flow
              </h3>
              
              <div className="space-y-6">
                {/* Browser */}
                <div className="flex items-center justify-center">
                  <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-medium">
                    🌐 Browser Request
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="text-gray-400" size={24} />
                </div>
                
                {/* CloudFront */}
                <div className="flex items-center justify-center">
                  <div className="bg-orange-100 text-orange-800 px-6 py-3 rounded-lg font-medium">
                    ☁️ CloudFront CDN
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="text-gray-400" size={24} />
                </div>
                
                {/* Lambda@Edge */}
                <div className="flex items-center justify-center">
                  <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-lg font-medium">
                    ⚡ Lambda@Edge
                  </div>
                </div>
                
                {/* Decision Branch */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium mb-2">
                      ✅ With Consent
                    </div>
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium text-sm">
                      Google GTM
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-medium mb-2">
                      ❌ No Consent
                    </div>
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium text-sm">
                      Empty Script
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Features
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Shield className="text-teal-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Header Stripping</h4>
                    <p className="text-gray-600 text-sm">
                      Removes IP addresses, referrer data, and device fingerprints 
                      before forwarding to Google.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Zap className="text-coral-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global CDN</h4>
                    <p className="text-gray-600 text-sm">
                      CloudFront edge locations ensure sub-100ms response times 
                      worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-500 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Consent Detection</h4>
                    <p className="text-gray-600 text-sm">
                      Supports cookies, headers, and dataLayer events from any CMP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Implementation Guide
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Get up and running in minutes with our simple integration.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      ❌
                    </span>
                    Before (Problematic)
                  </h3>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{`<script>
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime()});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXX');
</script>`}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-700">
                      ⚠️ Sends data to Google before consent
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      ✅
                    </span>
                    After (GDPR Compliant)
                  </h3>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{`<script>
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime()});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://cdn.consentgate.io/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXX');
</script>`}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700">
                      ✅ Only changes the src URL - everything else stays the same
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" className="gradient-teal-coral text-white hover:opacity-90 text-lg px-8 py-3">
              Start Your Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
