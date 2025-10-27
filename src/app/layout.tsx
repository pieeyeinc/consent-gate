import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConsentGate - Make Google Tag Manager Legal Again",
  description: "A privacy-first GTM proxy that prevents data transfer before consent — in compliance with the 2025 German court ruling.",
  keywords: "GDPR, GTM, Google Tag Manager, privacy, consent, compliance, proxy",
  authors: [{ name: "ConsentGate" }],
  openGraph: {
    title: "ConsentGate - Make Google Tag Manager Legal Again",
    description: "A privacy-first GTM proxy that prevents data transfer before consent — in compliance with the 2025 German court ruling.",
    type: "website",
    url: "https://consentgate.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}