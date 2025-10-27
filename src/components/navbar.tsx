"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-teal-coral rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CG</span>
            </div>
            <span className="text-xl font-bold gradient-teal-coral-text">
              ConsentGate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="/product" className="text-gray-700 hover:text-teal-600 transition-colors">
              Product
            </Link>
            <Link href="/compliance" className="text-gray-700 hover:text-teal-600 transition-colors">
              Compliance
            </Link>
            <Link href="/partners" className="text-gray-700 hover:text-teal-600 transition-colors">
              Partners
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </Link>
            <Button className="gradient-teal-coral text-white hover:opacity-90">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-2">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/product"
                className="block py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/compliance"
                className="block py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Compliance
              </Link>
              <Link
                href="/partners"
                className="block py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full gradient-teal-coral text-white hover:opacity-90 mt-4">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
