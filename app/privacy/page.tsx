import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - ConsentGate',
  description: 'Privacy policy for ConsentGate and PieEye Inc.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-16 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 2025
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            PieEye Inc. ("we," "our," or "us") operates the ConsentGate service (the "Service"). 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you use our Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Account information (name, email address, company)</li>
            <li>Domain information for proxy configuration</li>
            <li>Payment information (processed securely by Stripe)</li>
            <li>Support communications</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.2 Information We Collect Automatically</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Usage data and analytics</li>
            <li>Proxy request logs (anonymized)</li>
            <li>Performance metrics</li>
            <li>Error logs and debugging information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide and maintain the Service</li>
            <li>Process payments and manage subscriptions</li>
            <li>Monitor and improve Service performance</li>
            <li>Provide customer support</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Information Sharing</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties, 
            except as described in this Privacy Policy or with your consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Object to processing of your information</li>
            <li>Data portability</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>Email:</strong> privacy@pii.ai<br />
              <strong>Address:</strong> PieEye Inc., 123 Privacy Street, San Francisco, CA 94105
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

