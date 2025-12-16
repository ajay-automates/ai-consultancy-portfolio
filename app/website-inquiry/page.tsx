'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { InlineWidget } from 'react-calendly'
import Header from '@/components/Header'

export default function WebsiteInquiry() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-white/30 selection:text-white font-sans">
            <Header />

            <div className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-12 text-center md:text-left">
                        <span className="text-orange-500 font-mono tracking-widest text-sm mb-4 block">CUSTOM WEBSITE INFRASTRUCTURE</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's build your new platform.</h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl">
                            We don't just build websites. We build conversion-ready infrastructure that integrates with your entire automation stack.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold mb-4">What we need to know</h3>
                            <p className="text-gray-400 mb-6">
                                To assist you better during our call, please confirm:
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                    What is your current tech stack (CRM, Email, etc)?
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                    Do you have specific design assets or do we design from scratch?
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                    What automated workflows need to trigger from the site?
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-center">
                            <h3 className="text-xl font-bold mb-2">Ready to scale?</h3>
                            <p className="text-gray-400">
                                Schedule your strategy session below. We'll map out the architecture together.
                            </p>
                        </div>
                    </div>

                    {mounted && (
                        <div className="w-full h-[700px] border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                            <InlineWidget
                                url="https://calendly.com/ajay-folderwave/30min"
                                styles={{ height: '100%', width: '100%' }}
                                pageSettings={{
                                    backgroundColor: '111111',
                                    hideEventTypeDetails: false,
                                    hideLandingPageDetails: false,
                                    primaryColor: 'f97316',
                                    textColor: 'ffffff'
                                }}
                            />
                        </div>
                    )}

                </motion.div>
            </div>
        </main>
    )
}
