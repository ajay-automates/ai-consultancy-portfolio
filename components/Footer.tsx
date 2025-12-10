'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <span className="font-bold text-white">AI Automation</span>
            </div>
            <p className="text-gray-400 text-sm">
              Custom automation solutions for growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 text-sm hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-400 text-sm hover:text-white transition">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-gray-400 text-sm hover:text-white transition">
                  Quick Win
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 text-sm hover:text-white transition">
                  Full Stack
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 text-sm hover:text-white transition">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com" className="text-gray-400 text-sm hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-gray-400 text-sm hover:text-white transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="text-gray-400 text-sm hover:text-white transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2025 AI Automation Consultancy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
