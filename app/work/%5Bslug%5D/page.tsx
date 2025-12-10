'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectDetailPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Project Hero Image */}
          <div className="w-full bg-gradient-to-br from-orange-500/20 to-black rounded-lg overflow-hidden mb-12 aspect-video flex items-center justify-center text-8xl">
            ✨
          </div>

          {/* Project Title */}
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Email Outreach Automation
          </h1>

          <p className="text-gray-400 text-lg mb-4">Sales Automation</p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Challenge */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed">
                  Sales teams were spending 20+ hours per week on manual email outreach. Every prospect needed
                  personalization. Follow-ups were forgotten. No tracking of which messages resonated. Sales cycle
                  was unnecessarily long because prospects fell through the cracks.
                </p>
              </section>

              {/* Solution */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">The Solution</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We built an AI-powered email automation system that:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span>Generates personalized cold emails using company research</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span>Creates natural follow-up sequences automatically</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span>Tracks opens, clicks, and responses in real-time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span>Integrates with CRM for automatic lead scoring</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span>Delivers qualified leads ready for sales conversations</span>
                  </li>
                </ul>
              </section>

              {/* Results */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">The Results</h2>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-6 rounded border border-gray-800">
                    <p className="text-gray-400 text-sm mb-2">Qualified Leads</p>
                    <p className="text-4xl font-bold text-white">
                      10 <span className="text-orange-500">→</span> 50/month
                    </p>
                    <p className="text-gray-400 text-sm mt-2">+400% increase</p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded border border-gray-800">
                    <p className="text-gray-400 text-sm mb-2">Response Rate</p>
                    <p className="text-4xl font-bold text-white">12-18%</p>
                    <p className="text-gray-400 text-sm mt-2">vs 2-3% industry average</p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded border border-gray-800">
                    <p className="text-gray-400 text-sm mb-2">Time Saved</p>
                    <p className="text-4xl font-bold text-white">20 hrs/week</p>
                    <p className="text-gray-400 text-sm mt-2">Per founder/sales manager</p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded border border-gray-800">
                    <p className="text-gray-400 text-sm mb-2">Sales Cycle</p>
                    <p className="text-4xl font-bold text-white">-40%</p>
                    <p className="text-gray-400 text-sm mt-2">Faster deal closure</p>
                  </div>
                </div>
              </section>

              {/* Testimonial */}
              <section>
                <blockquote className="text-xl italic text-gray-300 pl-6 border-l-4 border-orange-500">
                  &quot;This tool got us from 0 leads to 100 leads per month. We&apos;re closing 40% of those into
                  customers. It completely transformed our sales process. Best money we&apos;ve spent.&quot;
                  <footer className="text-sm text-gray-400 mt-4 font-normal not-italic">
                    — Sarah Johnson, CEO of SaaS Company
                  </footer>
                </blockquote>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-white font-bold mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-xs font-medium mb-1">Timeline</p>
                    <p className="text-white">2-4 weeks</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium mb-1">Implementation</p>
                    <p className="text-white">Full setup & training</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium mb-1">Included In</p>
                    <p className="text-white">Full Stack & Enterprise</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="block bg-orange-500 hover:bg-orange-600 text-white py-4 rounded text-center font-bold transition duration-300"
              >
                Get This Solution
              </Link>

              {/* Related Projects */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-white font-bold mb-4">Works Best With</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/work/lead-scoring" className="text-orange-500 hover:text-orange-400 text-sm">
                      Lead Scoring System
                    </Link>
                  </li>
                  <li>
                    <Link href="/work/chatbot" className="text-orange-500 hover:text-orange-400 text-sm">
                      Support Chatbot
                    </Link>
                  </li>
                  <li>
                    <Link href="/work/proposals" className="text-orange-500 hover:text-orange-400 text-sm">
                      Proposal Generator
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Ready to automate your sales process?</p>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded font-medium transition duration-300"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
