'use client'

import Header from '@/components/Header'
import { projects } from '@/components/data'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Cpu, Globe, MessageSquare, Zap, Terminal, Code, Database, Mail, MapPin, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/30 selection:text-white font-sans">
      <Header />

      {/* HERO SECTION */}
      <section id="home" className="pt-48 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-500 font-mono tracking-widest text-sm mb-6 block">AI AUTOMATION CONSULTANCY</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
            We design and build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              AI systems
            </span>{' '}
            for <br />
            modern businesses.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light leading-relaxed">
            Automation, AI agents, and internal tools — custom built for how your business actually works.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <a href="/website-inquiry" className="group bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform flex items-center gap-2">
              Book a 15-Min Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-gray-500 text-sm font-mono">
              No pitch. We map your <br className="hidden md:block" /> automation opportunities.
            </p>
          </div>
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we do</h2>
            <p className="text-gray-400 text-lg">Clear consultancy focused on results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Automate Repetitive Workflows',
                desc: 'Stop wasting hours on manual data entry and repetitive tasks.'
              },
              {
                icon: Cpu,
                title: 'Build Internal AI Tools',
                desc: 'Custom dashboards and tools powered by your specialized data.'
              },
              {
                icon: Globe,
                title: 'Integrate AI Systems',
                desc: 'Seamlessly connect AI into your existing tech stack and workflows.'
              },
              {
                icon: Check,
                title: 'Replace Manual Ops',
                desc: 'Transform slow manual operations into instant automated processes.'
              },
              {
                icon: MessageSquare,
                title: 'Scale Without Headcount',
                desc: 'Grow your capacity 10x without needing to hire more staff.'
              },
              {
                icon: ArrowRight,
                title: 'Production-Ready Systems',
                desc: 'Every solution is custom built and deployed to production standards.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="py-32 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-orange-500 font-mono tracking-widest text-sm mb-4 block">OUR WORK</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected work</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              These are real systems we’ve built or deployed for businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => {
                  router.push('/website-inquiry')
                }}
              >
                <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-white/30 transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/10">
                    {project.client}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, t) => (
                    <span key={t} className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium border-b border-orange-500/30 pb-0.5 text-orange-500/80 group-hover:border-orange-500 group-hover:text-orange-500 transition-all inline-block">
                  Book a call to discuss
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center pt-8 border-t border-white/5">
            <p className="text-gray-500 font-mono text-sm max-w-md mx-auto">
              Each project can be adapted, extended, or combined for your business.
            </p>
          </div>
        </div>
      </section>

      {/* HOW ENGAGEMENTS WORK */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-orange-500 font-mono tracking-widest text-sm mb-4 block">PROCESS</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How we work</h2>
              <p className="text-gray-400 text-lg mb-8">
                We don't just sell software. We partner with you to build the right solution.
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {[
                {
                  step: '01',
                  title: 'Discovery & audit',
                  desc: 'We study your workflows, tools, and bottlenecks to find the highest-value opportunities.'
                },
                {
                  step: '02',
                  title: 'System design',
                  desc: 'We architect an AI solution tailored to your operation, not a generic template.'
                },
                {
                  step: '03',
                  title: 'Build & deployment',
                  desc: 'We implement, test, and ship production-ready systems that integrate with your stack.'
                },
                {
                  step: '04',
                  title: 'Iteration & scale',
                  desc: 'We utilize data from the live system to improve performance and expand capabilities.'
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="font-mono text-xl text-orange-500/50 mt-1">{step.step}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / ABOUT STUDIO - MERGED SECTION */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-orange-500 font-mono tracking-widest text-sm mb-6 block">ABOUT THE STUDIO</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Engineers, not <br /> salespeople.
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                We are a technical studio built by engineers who have spent years automating workflows for high-growth companies. We don't just "set up Zaps." We architect robust systems using code, AI agents, and enterprise-grade infrastructure.
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <div className="flex items-center gap-6 p-6 border border-white/10 rounded-2xl bg-black/40">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white">Ajay Nelavetla</h3>
                  <p className="text-orange-500 font-mono text-xs mb-2">Lead Automation Architect</p>
                  <p className="text-gray-400 text-sm">
                    Full-stack developer & AI systems orchestrator.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Terminal, title: 'Code-First', desc: 'We prefer code over fragile no-code tools when stability matters.' },
              { icon: Cpu, title: 'AI Native', desc: 'Workflows where LLMs act as intelligent decision-making nodes.' },
              { icon: Database, title: 'Data Integrity', desc: 'We prioritize validation, error handling, and security.' },
              { icon: Code, title: 'Full Ownership', desc: 'You own the system. No vendor lock-in.' },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-black/40 border border-white/10 rounded-xl">
                <feature.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA & CONTACT FORM */}
      <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900/10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Column: CTA Context */}
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Let’s design your <br />
                automation roadmap.
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                We’ll identify where AI saves you time, money, or headcount. No pressure, just a conversation about what's possible.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full border border-white/10">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email us</h3>
                    <a href="mailto:ajaykumarreddynelavetla@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                      ajaykumarreddynelavetla@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full border border-white/10">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Call us</h3>
                    <a href="tel:+18575761177" className="text-gray-400 hover:text-white transition-colors">
                      +1 (857) 576-1177
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full border border-white/10">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Based in</h3>
                    <p className="text-gray-400">Silicon Valley, CA<br />Available Globally</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-[#111] p-8 md:p-12 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-mono">First Name</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-mono">Last Name</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-mono">Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="jane@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-mono">Tell us about your project</label>
                  <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="We're looking to automate..." />
                </div>

                <button className="w-full bg-white text-black font-bold text-lg py-4 rounded-full hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10 text-center text-gray-600 text-sm font-mono bg-[#050505]">
        <p>© 2025 AI Automation Consultancy. All systems operational.</p>
      </footer>
    </main>
  )
}
