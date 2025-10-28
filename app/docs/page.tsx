import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation - ConsentGate',
  description: 'Complete installation and integration guide for ConsentGate GTM proxy.',
}

export default function DocsPage() {
  return (
    <div className="pt-16 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Documentation</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Welcome to the ConsentGate documentation. Here you'll find everything you need to get started with our consent-aware GTM proxy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Quick Start</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-8">
            <li><a href="#installation" className="text-blue-600 hover:underline">Installation Guide</a> - Get up and running in minutes</li>
            <li><a href="#cmp-integration" className="text-blue-600 hover:underline">CMP Integration</a> - Connect with your consent management platform</li>
            <li><a href="#troubleshooting" className="text-blue-600 hover:underline">Troubleshooting</a> - Common issues and solutions</li>
            <li><a href="#api-reference" className="text-blue-600 hover:underline">API Reference</a> - RESTful API documentation</li>
            <li><a href="#webhooks" className="text-blue-600 hover:underline">Webhooks</a> - Real-time event notifications</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Getting Help</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-8">
            <li><strong>Email Support</strong>: support@pii.ai</li>
            <li><strong>Portal</strong>: <a href="https://app.consentgate.io" className="text-blue-600 hover:underline">app.consentgate.io</a></li>
            <li><strong>Status</strong>: <a href="https://status.pii.ai" className="text-blue-600 hover:underline">status.pii.ai</a></li>
          </ul>

          <hr className="my-12" />

          <h1 id="installation" className="text-3xl font-bold text-gray-900 mb-6">Installation Guide</h1>
          <p className="text-gray-700 mb-6">
            Get ConsentGate up and running in just a few minutes. This guide will walk you through the complete setup process.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prerequisites</h2>
          <p className="text-gray-700 mb-4">Before you begin, make sure you have:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>A verified domain in your PieEye Portal account</li>
            <li>An active subscription (Starter, Growth, or Enterprise)</li>
            <li>Access to your website's HTML source code</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 1: Create Your Proxy</h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-6">
            <li>Log in to your <a href="https://app.consentgate.io/sign-in" className="text-blue-600 hover:underline">PieEye Portal</a></li>
            <li>Navigate to the <strong>Developer Setup</strong> page</li>
            <li>Select a verified domain from the dropdown</li>
            <li>Click <strong>Provision Proxy</strong></li>
            <li>Wait for the proxy to be created (usually takes 2-3 minutes)</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 2: Replace Your GTM Script</h2>
          <p className="text-gray-700 mb-4">
            Once your proxy is ready, you'll receive a CloudFront URL. Replace your existing GTM script with:
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-100">
              <code>{`<!-- Replace this -->
<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX"></script>

<!-- With this -->
<script async src="https://YOUR-CLOUDFRONT-URL/gtm.js?id=GTM-XXXXXXX"></script>`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 3: Configure Your CMP</h2>
          <p className="text-gray-700 mb-4">
            Add the following JavaScript snippet to your website before the GTM script:
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-100">
              <code>{`window.consentgate = {
  cmp: "your-cmp-name",        // e.g., "onetrust", "didomi", "cookiebot"
  consentCookie: "cookie-name", // The cookie your CMP sets for consent
  // Optional: Custom consent check function
  checkConsent: () => {
    // Return true if user has consented, false otherwise
    return window.YourCMP && window.YourCMP.hasConsent();
  }
};`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">CMP-Specific Examples</h3>
          
          <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">OneTrust</h4>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-100">
              <code>{`window.consentgate = {
  cmp: "onetrust",
  consentCookie: "OptanonConsent",
  checkConsent: () => {
    return window.Optanon && window.Optanon.IsAlertBoxClosed();
  }
};`}</code>
            </pre>
          </div>

          <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Didomi</h4>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-100">
              <code>{`window.consentgate = {
  cmp: "didomi",
  consentCookie: "didomi_token",
  checkConsent: () => {
    return window.Didomi && window.Didomi.getConsentStatus();
  }
};`}</code>
            </pre>
          </div>

          <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Cookiebot</h4>
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-100">
              <code>{`window.consentgate = {
  cmp: "cookiebot",
  consentCookie: "CookieConsent",
  checkConsent: () => {
    return window.Cookiebot && window.Cookiebot.consent.statistics;
  }
};`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 4: Test Your Implementation</h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-6">
            <li>Open your website in a private/incognito browser window</li>
            <li>Check the browser's Network tab</li>
            <li>You should see GTM requests being blocked initially</li>
            <li>Grant consent through your CMP</li>
            <li>GTM requests should now be allowed through</li>
          </ol>

          <h2 id="troubleshooting" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Troubleshooting</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">GTM Still Loading Before Consent</h3>
          <p className="text-gray-700 mb-2"><strong>Problem</strong>: GTM is loading immediately, ignoring consent.</p>
          <p className="text-gray-700 mb-4"><strong>Solution</strong>:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Verify your CMP configuration is correct</li>
            <li>Check that the <code>consentgate</code> object is defined before the GTM script</li>
            <li>Ensure your CMP is setting the correct cookie name</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">403 Forbidden Errors</h3>
          <p className="text-gray-700 mb-2"><strong>Problem</strong>: Getting 403 errors when GTM tries to load.</p>
          <p className="text-gray-700 mb-4"><strong>Solution</strong>:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>This is expected behavior when no consent is given</li>
            <li>Check that your CMP is properly configured</li>
            <li>Verify the consent cookie is being set correctly</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">502 Bad Gateway Errors</h3>
          <p className="text-gray-700 mb-2"><strong>Problem</strong>: Getting 502 errors from the proxy.</p>
          <p className="text-gray-700 mb-4"><strong>Solution</strong>:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Check your PieEye Portal for proxy status</li>
            <li>Ensure your domain is verified</li>
            <li>Contact support if the issue persists</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Support</h2>
          <p className="text-gray-700 mb-4">Need help? We're here to assist:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Email</strong>: support@pii.ai</li>
            <li><strong>Documentation</strong>: <a href="https://app.consentgate.io/docs" className="text-blue-600 hover:underline">app.consentgate.io/docs</a></li>
            <li><strong>Status Page</strong>: <a href="https://status.pii.ai" className="text-blue-600 hover:underline">status.pii.ai</a></li>
          </ul>

          <p className="text-sm text-gray-500 mt-12">
            <em>Last updated: January 2025</em>
          </p>
        </div>
      </div>
    </div>
  )
}
