'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export default function FitSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-mono tracking-widest text-sm mb-4 block">CLIENT FIT</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Is this for you?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We work with specific types of businesses. Here's who we're built for.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* We work best with */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white/5 border border-white/10 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Check className="w-6 h-6 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold">We work best with</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'Founders & operators',
                                'Small teams (2–50 people)',
                                'SaaS, agencies, professional services',
                                'Businesses already using tools',
                                'Teams ready for custom systems'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not a fit if */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white/5 border border-white/10 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                                <X className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold">Not a fit if</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'You want cheap tools',
                                'You want courses or templates',
                                'You're looking for DIY solutions',
                            'You don't want custom work',
                            'You need it done in 48 hours'
              ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{item}</span>
                            </li>
              ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 font-mono text-sm">
                        This saves us both time. If you're a fit, let's talk.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
