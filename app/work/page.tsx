'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const allProjects = [
  {
    id: 1,
    title: 'Email Outreach Automation',
    description: 'AI-powered cold email tool with auto-follow-ups',
    category: 'Sales Automation',
    image: '📧',
    metrics: '100+ leads/month',
    slug: 'email-automation',
  },
  {
    id: 2,
    title: 'Support Chatbot',
    description: '24/7 AI customer support reducing tickets by 80%',
    category: 'Customer Success',
    image: '💬',
    metrics: '80% ticket reduction',
    slug: 'chatbot',
  },
  {
    id: 3,
    title: 'Lead Scoring System',
    description: 'Automatic qualification and CRM integration',
    category: 'Lead Management',
    image: '📊',
    metrics: '45% close rate',
    slug: 'lead-scoring',
  },
  {
    id: 4,
    title: 'Social Media AI',
    description: 'Auto-generate content calendars and scheduling',
    category: 'Content Automation',
    image: '📱',
    metrics: '50 posts/week',
    slug: 'social-media',
  },
  {
    id: 5,
    title: 'Invoice Automation',
    description: 'Automatic invoice generation and payment tracking',
    category: 'Finance Automation',
    image: '💳',
    metrics: '5 min setup',
    slug: 'invoicing',
  },
  {
    id: 6,
    title: 'Proposal Generator',
    description: 'Create professional proposals in minutes',
    category: 'Sales Automation',
    image: '📄',
    metrics: '60% faster',
    slug: 'proposals',
  },
]

export default function WorkPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Custom automation solutions built for growing businesses. See all the projects we&apos;ve completed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link href={`/work/${project.slug}`}>
                <div className="bg-gray-900 hover:bg-gray-800 transition duration-300 rounded overflow-hidden group cursor-pointer h-full">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                    {project.image}
                  </div>

                  <div className="p-6">
                    <div className="text-orange-500 text-sm font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">{project.metrics}</span>
                      <span className="text-orange-500 group-hover:translate-x-1 transition">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
