import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ConsentGate - Make Google Tag Manager Compliant Automatically',
  description: 'The first consent-aware proxy for GTM, ensuring no data is sent to Google until user consent is granted. Based on the 2025 German court ruling.',
  keywords: 'GTM, Google Tag Manager, GDPR, consent, privacy, compliance, proxy, CMP',
  authors: [{ name: 'PieEye Inc.' }],
  openGraph: {
    title: 'ConsentGate - Make Google Tag Manager Compliant Automatically',
    description: 'The first consent-aware proxy for GTM, ensuring no data is sent to Google until user consent is granted.',
    url: 'https://consentgate.io',
    siteName: 'ConsentGate',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ConsentGate - GTM Compliance Made Easy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConsentGate - Make Google Tag Manager Compliant Automatically',
    description: 'The first consent-aware proxy for GTM, ensuring no data is sent to Google until user consent is granted.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

