"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">ConsentGate</span>
              <span className="text-sm text-gray-500 ml-2">for GTM</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/product"
                className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Product
              </Link>
              <Link
                href="/docs"
                className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Docs
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="https://app.consentgate.io/sign-in">Log In</Link>
            </Button>
            <Button asChild className="brand-button">
              <Link href="https://app.consentgate.io/sign-up">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/product"
                className="text-gray-700 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/docs"
                className="text-gray-700 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3 space-x-3">
                  <Button variant="ghost" asChild className="flex-1">
                    <Link href="https://app.consentgate.io/sign-in">Log In</Link>
                  </Button>
                  <Button asChild className="flex-1 brand-button">
                    <Link href="https://app.consentgate.io/sign-up">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
