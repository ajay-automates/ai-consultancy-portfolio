'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="bg-gray-900 py-24 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto">
            Spend less time on manual work. More time on strategy.
          </p>
          <p className="text-gray-400 text-base mb-12 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation to see how automation can transform your business.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-black px-12 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition duration-300"
          >
            Let&apos;s Talk
          </Link>

          <p className="text-gray-400 text-sm mt-6">
            Response time: Usually within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
