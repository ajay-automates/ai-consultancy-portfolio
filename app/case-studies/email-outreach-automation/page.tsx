'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import { ArrowLeft, Check } from 'lucide-react'

export default function EmailOutreachCaseStudy() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-white/30 selection:text-white font-sans">
            <Header />

            <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Back Link */}
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to home
                    </a>

                    {/* Header */}
                    <span className="text-orange-500 font-mono tracking-widest text-sm mb-4 block">CASE STUDY</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">AI-Powered Email Outreach Automation</h1>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-mono">
                            2 weeks delivery
                        </span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-mono">
                            100% automated
                        </span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-mono">
                            Production-ready
                        </span>
                    </div>

                    {/* Client Context */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Client Context</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Internal / Founder-led project for testing AI-driven outbound workflows. The goal was to build a system that could handle personalized outreach at scale without manual intervention.
                        </p>
                    </section>

                    {/* Problem */}
                    <section className="mb-12 p-8 bg-white/5 border border-white/10 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                Manual outreach was time-consuming and inconsistent
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                No tracking system for replies or follow-ups
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                Personalization at scale was impossible without automation
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                Needed a system that could run daily without supervision
                            </li>
                        </ul>
                    </section>

                    {/* System Built */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">System Built</h2>
                        <div className="space-y-4">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-500" />
                                    AI-Powered Research
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Automated prospect research using AI to gather relevant context for personalization
                                </p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-500" />
                                    Dynamic Email Generation
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    GPT-4 powered email writing with custom prompts for each prospect
                                </p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-500" />
                                    Automated Sending & Tracking
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Scheduled sending with reply tracking and automatic follow-up sequences
                                </p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-500" />
                                    Database Integration
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    All data stored in Supabase for tracking, analytics, and campaign management
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Outcome */}
                    <section className="mb-12 p-8 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-4">Outcome</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                                <p className="text-gray-300">Automated daily outreach</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-500 mb-2">~15 hrs</div>
                                <p className="text-gray-300">Saved per week</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-500 mb-2">Real-time</div>
                                <p className="text-gray-300">Reply tracking</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-500 mb-2">2 weeks</div>
                                <p className="text-gray-300">From idea to production</p>
                            </div>
                        </div>
                    </section>

                    {/* Tools Used */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Tools & Stack</h2>
                        <div className="flex flex-wrap gap-3">
                            {['OpenAI GPT-4', 'SendGrid', 'Supabase', 'Next.js', 'TypeScript', 'Vercel'].map((tool, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Want a similar system?</h3>
                        <p className="text-gray-400 mb-6">
                            We can build custom automation for your specific workflow.
                        </p>
                        <a
                            href="/website-inquiry"
                            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform"
                        >
                            Book a strategy call
                        </a>
                    </section>
                </motion.div>
            </div>
        </main>
    )
}
