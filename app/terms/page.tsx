import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - ConsentGate',
  description: 'Terms of service for ConsentGate and PieEye Inc.',
}

export default function TermsPage() {
  return (
    <div className="pt-16 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 2025
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using the ConsentGate service ("Service"), you accept and agree to be 
            bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            ConsentGate is a consent-aware proxy service for Google Tag Manager that ensures 
            compliance with privacy regulations by blocking GTM requests until user consent is granted.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
          <p className="text-gray-700 mb-4">
            To use the Service, you must create an account. You are responsible for maintaining 
            the confidentiality of your account and password and for restricting access to your computer.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Acceptable Use</h2>
          <p className="text-gray-700 mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Use the Service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to the Service</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Use the Service to violate any privacy laws or regulations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
          <p className="text-gray-700 mb-4">
            Subscription fees are billed in advance on a monthly or annual basis. All fees are 
            non-refundable except as required by law. We may change our pricing with 30 days notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Service Level Agreement</h2>
          <p className="text-gray-700 mb-4">
            We strive to maintain 99.9% uptime for the Service. If we fail to meet this SLA, 
            you may be eligible for service credits as outlined in your subscription plan.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The Service and its original content, features, and functionality are owned by PieEye Inc. 
            and are protected by international copyright, trademark, patent, trade secret, and other 
            intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall PieEye Inc. be liable for any indirect, incidental, special, consequential, 
            or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
            or other intangible losses.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Termination</h2>
          <p className="text-gray-700 mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability, 
            for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms shall be interpreted and governed by the laws of the State of California, 
            without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>Email:</strong> legal@pii.ai<br />
              <strong>Address:</strong> PieEye Inc., 123 Privacy Street, San Francisco, CA 94105
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

