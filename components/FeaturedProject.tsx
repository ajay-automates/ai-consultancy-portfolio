'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FeaturedProject() {
  return (
    <section className="bg-black py-24 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Featured Project Image */}
          <div className="w-full bg-gradient-to-br from-orange-500/20 to-black rounded-lg overflow-hidden mb-12 aspect-video flex items-center justify-center text-8xl">
            ✨
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Text */}
            <div>
              <div className="text-orange-500 text-sm font-medium mb-4">Featured Project</div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Went from $0 to $100k/month with Automation
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-2">The Challenge</h3>
                  <p className="text-gray-400">
                    Spending 80% of time on manual sales activity. No qualification system. Founder drowning in emails. Revenue plateau at $2M.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">The Solution</h3>
                  <p className="text-gray-400">
                    We implemented our complete 3-tool automation stack: email outreach with AI, lead scoring system, and CRM integration.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">The Results</h3>
                  <div className="space-y-2">
                    <p className="text-gray-400">
                      <span className="text-white font-bold">+400%</span> in qualified leads (10 → 50/month)
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white font-bold">-50%</span> sales cycle (14 days → 7 days)
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white font-bold">-75%</span> founder&apos;s time on sales (40 hrs → 10 hrs)
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white font-bold">+60%</span> revenue in 6 months ($2M → $3.2M)
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="text-lg italic text-gray-300 my-8 pl-6 border-l-2 border-orange-500">
                &quot;Best investment we made this year. I went from drowning in emails to actually running the business.&quot;
                <footer className="text-sm text-gray-400 mt-2 font-normal not-italic">— CEO, SaaS Company</footer>
              </blockquote>

              <Link
                href="#services"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-medium transition duration-300"
              >
                Learn How We Do It
              </Link>
            </div>

            {/* Right Side - Stats */}
            <div className="space-y-6">
              <div className="bg-gray-900 p-8 rounded">
                <div className="text-gray-400 text-sm font-medium mb-2">Qualified Leads</div>
                <div className="text-5xl font-bold text-white mb-2">400%</div>
                <p className="text-gray-400 text-sm">Increase in monthly leads</p>
              </div>

              <div className="bg-gray-900 p-8 rounded">
                <div className="text-gray-400 text-sm font-medium mb-2">Sales Cycle</div>
                <div className="text-5xl font-bold text-white mb-2">-50%</div>
                <p className="text-gray-400 text-sm">Faster deal closure</p>
              </div>

              <div className="bg-gray-900 p-8 rounded">
                <div className="text-gray-400 text-sm font-medium mb-2">Time Saved</div>
                <div className="text-5xl font-bold text-white mb-2">30 hrs</div>
                <p className="text-gray-400 text-sm">Per week on automation</p>
              </div>

              <div className="bg-gray-900 p-8 rounded">
                <div className="text-gray-400 text-sm font-medium mb-2">Revenue Growth</div>
                <div className="text-5xl font-bold text-white mb-2">+60%</div>
                <p className="text-gray-400 text-sm">In 6 months</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
