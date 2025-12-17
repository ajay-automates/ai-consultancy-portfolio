'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: 'How long does a typical project take?',
        answer: "Most automations are built and deployed in 2-4 weeks. Simple workflows can be done in 1 week. Complex multi-system integrations may take 4-6 weeks. We'll give you a clear timeline on the discovery call."
    },
    {
        question: 'Do I need technical knowledge?',
        answer: "No. We handle all the technical work. You just need to explain your current workflow and desired outcome. We'll ask the right questions to understand your process and build the system for you."
    },
    {
        question: 'What happens after I book a call?',
        answer: "We'll have a 15-minute strategy session to understand your biggest bottleneck. If it's a fit, we'll map out the automation, give you a timeline and quote, and start building. No pressure, no pitch."
    },
    {
        question: 'Can you integrate with my existing tools?',
        answer: "Yes. We work with most common tools (CRMs, email platforms, databases, APIs). If it has an API or webhook, we can connect it. We'll confirm compatibility on the discovery call."
    },
    {
        question: 'What if the automation breaks?',
        answer: 'We build production-grade systems with error handling and monitoring. If something breaks, we fix it. Most clients also opt for a monthly maintenance plan for ongoing support and updates.'
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-mono tracking-widest text-sm mb-4 block">COMMON QUESTIONS</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
                    <p className="text-gray-400 text-lg">
                        Quick answers to questions you might have.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5">
                                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 mb-4">Still have questions?</p>
                    <a
                        href="/website-inquiry"
                        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors"
                    >
                        Book a call and we&apos;ll answer them →
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
