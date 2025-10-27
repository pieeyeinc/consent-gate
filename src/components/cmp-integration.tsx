"use client";

import { motion } from "framer-motion";
import { CheckCircle, Code, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CMPIntegration() {
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
            Works With Any CMP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            ConsentGate integrates seamlessly with your existing consent management platform. 
            No SDKs, no API keys, no complex setup.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CMP Compatibility */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Universal Compatibility
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">OneTrust, Didomi, Cookiebot, Osano</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">PieEye CMP and custom banners</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Detects consent via JavaScript, cookie, or dataLayer</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">No SDKs or API keys required</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Drop-in replacement for your GTM script</span>
              </div>
            </div>

            {/* CMP Logos */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 mb-3">Compatible CMPs:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">OneTrust</Badge>
                <Badge variant="secondary" className="px-3 py-1">Didomi</Badge>
                <Badge variant="secondary" className="px-3 py-1">Cookiebot</Badge>
                <Badge variant="secondary" className="px-3 py-1">Osano</Badge>
                <Badge variant="secondary" className="px-3 py-1">PieEye CMP</Badge>
                <Badge variant="secondary" className="px-3 py-1">Custom CMPs</Badge>
              </div>
            </div>
          </motion.div>

          {/* Integration Code */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="text-teal-400" size={20} />
                  <span className="text-sm font-medium text-gray-300">Integration Snippet</span>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{`<!-- Replace your existing GTM script -->
<script>
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
                
                <div className="mt-4 p-3 bg-teal-900/30 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Zap className="text-teal-400 mt-0.5" size={16} />
                    <div>
                      <p className="text-sm text-teal-200 font-medium">That's it!</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Just change the src URL from googletagmanager.com to cdn.consentgate.io
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-teal-50 to-coral-50 border-teal-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                How Consent Detection Works
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cookie Detection</h4>
                  <p className="text-gray-600 text-sm">
                    Checks for consent cookies set by your CMP
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 gradient-coral rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Header Detection</h4>
                  <p className="text-gray-600 text-sm">
                    Reads X-Consent headers from your CMP
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 gradient-teal-coral rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">DataLayer Check</h4>
                  <p className="text-gray-600 text-sm">
                    Monitors dataLayer for consent events
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
