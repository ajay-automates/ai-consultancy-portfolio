'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import { Check, Calendar, FileText, Target } from 'lucide-react'

export default function ThankYou() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-white/30 selection:text-white font-sans">
            <Header />

            <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Success Icon */}
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
                        <Check className="w-10 h-10 text-green-500" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Your call is booked!</h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        You'll receive a calendar invite at the email you provided. We're looking forward to mapping out your automation strategy.
                    </p>

                    {/* What to Prepare */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-left mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-center">What to prepare for our call</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Current tools & tech stack</h3>
                                    <p className="text-gray-400 text-sm">
                                        List the main tools you use (CRM, email platform, database, etc.)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                    <Target className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Biggest bottleneck</h3>
                                    <p className="text-gray-400 text-sm">
                                        What manual process is eating up the most time each week?
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Desired outcome</h3>
                                    <p className="text-gray-400 text-sm">
                                        What would success look like? (e.g., "Save 10 hours/week", "Automate lead qualification")
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What Happens Next */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
                        <h2 className="text-xl font-bold mb-4">What happens next</h2>
                        <ol className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-orange-500 font-mono">01</span>
                                <span>You'll receive a Calendly confirmation email</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-500 font-mono">02</span>
                                <span>We'll have a 15-minute strategy session</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-500 font-mono">03</span>
                                <span>If it's a fit, we'll map out the automation and timeline</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-500 font-mono">04</span>
                                <span>We start building your system</span>
                            </li>
                        </ol>
                    </div>

                    {/* CTA */}
                    <div className="mt-12">
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            ← Back to home
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
