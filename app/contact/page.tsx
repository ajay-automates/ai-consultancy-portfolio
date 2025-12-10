'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send to your backend/email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Let&apos;s Talk</h1>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Tell us about your project. We&apos;ll respond within 24 hours with a personalized proposal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-8 text-center">
                  <p className="text-white font-bold mb-2">Thanks for reaching out! 🎉</p>
                  <p className="text-gray-300">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Tell us about your project</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition resize-none"
                      placeholder="What automation challenges are you facing?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-bold transition duration-300"
                  >
                    Send Message
                  </button>

                  <p className="text-gray-400 text-xs">
                    We respect your privacy. We&apos;ll only use your information to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-bold mb-2">Email</h3>
                <a href="mailto:hello@example.com" className="text-gray-400 hover:text-white transition">
                  hello@example.com
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold mb-2">Response Time</h3>
                <p className="text-gray-400">
                  We typically respond within 24 hours during business days.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-2">What Happens Next</h3>
                <ol className="text-gray-400 space-y-2 text-sm">
                  <li>1. You submit this form with your details</li>
                  <li>2. We review your automation needs</li>
                  <li>3. We schedule a 30-minute strategy call</li>
                  <li>4. You get a custom proposal within 48 hours</li>
                </ol>
              </div>

              <div className="bg-gray-900 p-6 rounded border border-gray-800">
                <h3 className="text-white font-bold mb-2">Quick Call?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Schedule time directly on our calendar.
                </p>
                <a
                  href="https://calendly.com/your-link"
                  className="inline-block border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded transition duration-300"
                >
                  Book on Calendly
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
