'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">About Us</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Why We Build This</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I spent 3 years as a growth operator at a fast-growing SaaS company. During that time, I watched brilliant founders and CEOs waste 40+ hours per week on repetitive manual work. Emails. Lead qualification. Customer support. Follow-ups. None of these tasks needed a human—they just needed to be automated.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">The Problem</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Off-the-shelf automation tools are designed for generic use cases. They don't fit your exact workflow. So you either force your team to work around the tool, or you spend thousands on custom development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                I built a third way: custom automation solutions that are specific to your business, integrated with your existing tools, and actually affordable.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Our Approach</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  <span className="text-white font-bold">1. Understand Your Workflow</span><br />
                  We spend time learning exactly how your business works, where manual work is happening, and what would change if it was automated.
                </p>
                <p>
                  <span className="text-white font-bold">2. Build Custom Solutions</span><br />
                  We don't force you into templates. We build automation that fits your exact process.
                </p>
                <p>
                  <span className="text-white font-bold">3. Integrate Everything</span><br />
                  Your automation connects seamlessly with your existing tools: Zapier, Make, your CRM, email platform, everything.
                </p>
                <p>
                  <span className="text-white font-bold">4. Train Your Team</span><br />
                  Your team owns the system. We train them on how to use, maintain, and optimize it.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Our Track Record</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-900 p-6 rounded">
                  <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                  <p className="text-gray-400">Companies automated</p>
                </div>
                <div className="bg-gray-900 p-6 rounded">
                  <div className="text-4xl font-bold text-orange-500 mb-2">10,000+</div>
                  <p className="text-gray-400">Hours saved annually</p>
                </div>
                <div className="bg-gray-900 p-6 rounded">
                  <div className="text-4xl font-bold text-orange-500 mb-2">$5M+</div>
                  <p className="text-gray-400">Revenue generated</p>
                </div>
                <div className="bg-gray-900 p-6 rounded">
                  <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
                  <p className="text-gray-400">Client satisfaction</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">What Drives Us</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We get excited watching founders and operators get 30+ hours back each week to focus on what matters: strategy, growth, and building their business. When someone tells us they finally have time to think about where their company is heading instead of drowning in execution, that&apos;s when we know we&apos;ve made a difference.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
