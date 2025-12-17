'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Ajay automated our outbound workflow and saved us ~12 hours per week. No fluff, just working systems.',
    author: 'Michael Torres',
    title: 'Founder',
    company: 'Growth Labs',
    metric: '12 hrs/week saved'
  },
  {
    quote: 'We went from manual ops to a fully automated system in under 2 weeks. Fast execution, real results.',
    author: 'Sarah Kim',
    title: 'Operations Lead',
    company: 'Velocity Co',
    metric: '2 week delivery'
  },
  {
    quote: 'Clear thinking, fast execution, and real systems — not demos. Our email outreach is now completely hands-off.',
    author: 'James Chen',
    title: 'CEO',
    company: 'Outreach Pro',
    metric: '100% automated'
  },
]

export default function Testimonials() {
  return (
    <section className="bg-black py-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">Client Results</h2>
          <p className="text-gray-400 text-lg">Real systems. Real outcomes.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded border border-gray-800 hover:border-orange-500 transition duration-300"
            >
              <div className="text-3xl text-orange-500 mb-4">❝</div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{testimonial.quote}</p>
              <div className="border-t border-gray-800 pt-6">
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">
                  {testimonial.title} at {testimonial.company}
                </p>
                {testimonial.metric && (
                  <p className="text-orange-500 text-sm font-mono mt-2">→ {testimonial.metric}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
