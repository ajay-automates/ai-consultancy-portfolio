export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white py-20 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        <div className="max-w-xs">
          <h2 className="text-xl font-bold mb-4">AI Automation Consultancy</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We design, build, and implement AI systems that replace manual work. Based in Silicon Valley, operating globally.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <h3 className="text-sm font-mono text-gray-500 mb-4 tracking-widest">SITEMAP</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="/#work" className="hover:text-orange-500 transition-colors">Work</a></li>
              <li><a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-mono text-gray-500 mb-4 tracking-widest">LEGAL</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors opacity-50 cursor-not-allowed">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-mono text-gray-500 mb-4 tracking-widest">CONNECT</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Twitter / X</a></li>
              <li><a href="https://www.linkedin.com/in/ajaykumarreddynelavetla/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">LinkedIn</a></li>
              <li><a href="mailto:ajaykumarreddynelavetla@gmail.com" className="hover:text-orange-500 transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono">
        <p>© 2025 AI Automation Consultancy. All rights reserved.</p>
        <p>System Status: Operational</p>
      </div>
    </footer>
  )
}
