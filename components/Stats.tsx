'use client'

import { motion } from 'framer-motion'

const stats = [
    {
        metric: '10+',
        label: 'AI Systems Built',
        description: 'Production-ready automations'
    },
    {
        metric: '1,000+',
        label: 'Actions Automated Daily',
        description: 'Across all client systems'
    },
    {
        metric: '10-20 hrs',
        label: 'Saved Per Week',
        description: 'Per automation workflow'
    },
    {
        metric: '100%',
        label: 'Production Deployed',
        description: 'No prototypes or demos'
    }
]

export default function Stats() {
    return (
        <section className="py-16 px-6 md:px-12 border-y border-white/10 bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                                {stat.metric}
                            </div>
                            <div className="text-lg font-semibold text-white mb-1">
                                {stat.label}
                            </div>
                            <div className="text-sm text-gray-400">
                                {stat.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
