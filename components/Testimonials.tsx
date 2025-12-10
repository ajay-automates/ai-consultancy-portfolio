'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'This automation tool saved us 40+ hours per week. Our close rate went from 20% to 45%. Best investment we made this year.',
    author: 'Sarah Chen',
    title: 'CEO',
    company: 'TechStart Inc',
  },
  {
    quote: 'The support chatbot eliminated 80% of our support tickets. Our team can now focus on strategic work instead of repetitive questions.',
    author: 'Marcus Johnson',
    title: 'Founder',
    company: 'SaaS Solutions',
  },
  {
    quote: 'Lead scoring automation gave us clarity on which prospects were actually qualified. Revenue increased 60% in 6 months.',
    author: 'Emma Williams',
    title: 'VP Sales',
    company: 'Growth Ventures',
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
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">What Our Clients Say</h2>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
