"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, CheckCircle, BarChart3 } from "lucide-react"

export function ConsentFlowDiagram() {
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
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            ConsentGate sits between your website and Google Tag Manager, intelligently managing consent before data transmission.
          </motion.p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. User Visits Site</h3>
              <p className="text-gray-600">
                User lands on your website. GTM script loads through ConsentGate proxy instead of directly from Google.
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden md:flex justify-center"
            >
              <ArrowRight className="h-8 w-8 text-gray-400" />
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Consent Check</h3>
              <p className="text-gray-600">
                ConsentGate checks your CMP for user consent status. If no consent, GTM requests are blocked.
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden md:flex justify-center"
            >
              <ArrowRight className="h-8 w-8 text-gray-400" />
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Data Flows</h3>
              <p className="text-gray-600">
                Once consent is granted, GTM requests flow normally to Google with full analytics and tracking.
              </p>
            </motion.div>
          </div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-gray-50 rounded-lg p-6"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Technical Implementation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Before ConsentGate:</h5>
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">
                  &lt;script src="https://www.googletagmanager.com/gtm.js"&gt;&lt;/script&gt;
                </code>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">With ConsentGate:</h5>
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">
                  &lt;script src="https://proxy.consentgate.io/gtm.js"&gt;&lt;/script&gt;
                </code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
