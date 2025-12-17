'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import { Code, Terminal, Zap, ArrowRight } from 'lucide-react'

export default function About() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-white/30 selection:text-white font-sans">
            <Header />

            <div className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Header */}
                    <span className="text-orange-500 font-mono tracking-widest text-sm mb-4 block">ABOUT</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">Built by engineers, not salespeople.</h1>

                    {/* Main Content */}
                    <div className="space-y-8 text-lg text-gray-400 leading-relaxed mb-16">
                        <p>
                            I'm Ajay Nelavetla, a full-stack developer and AI systems architect. I build custom automation systems for small teams and founders who need real solutions, not courses or templates.
                        </p>

                        <p>
                            Most "automation consultants" just connect Zapier triggers. I write code. I architect production-grade systems using AI agents, custom APIs, and enterprise infrastructure. Every system I build is tailored to your specific workflow—not a one-size-fits-all template.
                        </p>

                        <p>
                            I've spent years building automation for high-growth companies. Now I work with founders and small teams (2-50 people) who want to scale without hiring more staff.
                        </p>
                    </div>

                    {/* What I Build */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">What I build</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Zap,
                                    title: 'AI-Powered Workflows',
                                    desc: 'Email outreach, lead qualification, data enrichment—all automated with AI.'
                                },
                                {
                                    icon: Code,
                                    title: 'Custom Integrations',
                                    desc: 'Connect your CRM, email platform, and tools into one seamless system.'
                                },
                                {
                                    icon: Terminal,
                                    title: 'Internal Tools',
                                    desc: 'Custom dashboards, reporting systems, and admin panels built for your team.'
                                },
                                {
                                    icon: ArrowRight,
                                    title: 'Production Systems',
                                    desc: 'Everything is deployed to production with error handling and monitoring.'
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                    <item.icon className="w-8 h-8 text-orange-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
                        <p className="text-gray-400 mb-6">
                            I use modern, production-grade tools to build systems that actually work:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {[
                                'Next.js',
                                'TypeScript',
                                'OpenAI GPT-4',
                                'Supabase',
                                'SendGrid',
                                'Vercel',
                                'Node.js',
                                'PostgreSQL',
                                'Python',
                                'REST APIs'
                            ].map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Approach */}
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl mb-16">
                        <h2 className="text-2xl font-bold mb-4">My Approach</h2>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                <span><strong className="text-white">Code-first:</strong> I prefer writing code over fragile no-code tools when stability matters.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                <span><strong className="text-white">Fast delivery:</strong> Most projects are done in 2-4 weeks, not months.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                <span><strong className="text-white">Full ownership:</strong> You own the code. No vendor lock-in.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                <span><strong className="text-white">Production-ready:</strong> Every system includes error handling, monitoring, and documentation.</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to automate your workflow?</h3>
                        <p className="text-gray-400 mb-6">
                            Book a 15-minute call and I'll map out what's possible for your business.
                        </p>
                        <a
                            href="/website-inquiry"
                            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform"
                        >
                            Book a strategy call
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
