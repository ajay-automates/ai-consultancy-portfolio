'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center pt-24 px-6 sm:px-12">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            Build Custom Automation for Your Business
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We help growing companies automate repetitive work. Email outreach. Customer support. Lead scoring. Done for you, not just templates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#work"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded text-lg font-medium transition duration-300 w-full sm:w-auto text-center"
            >
              Explore Our Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded text-lg font-medium transition duration-300 w-full sm:w-auto text-center"
            >
              Schedule Call
            </Link>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center pt-8"
          >
            <div className="text-gray-500 text-sm">Scroll to explore</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
