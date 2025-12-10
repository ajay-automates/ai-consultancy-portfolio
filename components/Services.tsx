'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Quick Win',
    price: '$1,500',
    description: 'Perfect for testing automation before going all-in',
    features: [
      'Strategy consultation (2 hours)',
      'Implement one automation tool',
      'Team training',
      '30 days email support',
    ],
  },
  {
    title: 'Full Stack',
    price: '$5,000',
    description: 'Complete automation system for growing businesses',
    features: [
      'Deep strategy consultation (6 hours)',
      'Implement 3-tool automation stack',
      'Custom AI training',
      'CRM integration',
      '2 weeks team training',
      '60 days support + optimization',
    ],
    featured: true,
  },
  {
    title: 'Enterprise',
    price: '$15,000+',
    description: 'Full-service automation with ongoing support',
    features: [
      'Everything in Full Stack, plus:',
      'Complete automation audit',
      'Custom integrations (Zapier, Make, n8n)',
      'Advanced AI customization',
      'Process documentation',
      '90 days ongoing support',
      'Quarterly optimization reviews',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">How We Work</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the right package for your business. All include strategy, implementation, and support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-lg overflow-hidden transition duration-300 ${
                service.featured ? 'md:scale-105 border-2 border-orange-500' : 'border border-gray-900'
              }`}
            >
              <div className="bg-gray-900 p-8 h-full flex flex-col">
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-xs font-bold rounded-bl">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{service.price}</div>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                      <span className="text-orange-500 font-bold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded font-medium transition duration-300 ${
                    service.featured
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'border border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-lg p-8 text-center"
        >
          <p className="text-gray-300 mb-4">
            Not sure which package is right? Let&apos;s talk about your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded font-medium transition duration-300"
          >
            Schedule Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
