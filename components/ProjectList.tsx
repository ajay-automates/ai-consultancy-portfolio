'use client'

import { motion } from 'framer-motion'
import { projects } from './data'

export default function ProjectList() {
    return (
        <div className="w-full max-w-[95%] mx-auto pt-32 pb-40">
            <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">All projects</h1>
                <span className="text-xl md:text-2xl text-gray-500 font-medium">{projects.length} projects</span>
            </div>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative flex flex-col md:flex-row items-baseline py-8 border-b border-white/10 hover:border-white/40 transition-colors cursor-pointer"
                        onClick={() => {
                            if (project.link) {
                                window.open(project.link, '_blank', 'noopener,noreferrer')
                            }
                        }}
                    >
                        {/* Year - Sticky logic would go here if needed, keeping simple for now */}
                        <div className="w-24 text-lg font-mono text-gray-500 group-hover:text-white transition-colors">
                            {project.year}
                        </div>

                        {/* Title */}
                        <div className="flex-1 text-2xl md:text-3xl font-medium group-hover:translate-x-4 transition-transform duration-300">
                            {project.title}
                            {project.link && <span className="ml-2 text-sm text-orange-500">→</span>}
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2 mr-8">
                            {project.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="px-3 py-1 text-[10px] font-mono border border-white/20 rounded-full text-gray-400 uppercase group-hover:border-white/60 group-hover:text-white transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Client */}
                        <div className="w-32 text-right text-gray-500 font-mono text-sm group-hover:text-white transition-colors">
                            {project.client}
                        </div>

                        {/* Hover Image Reveal - simplified */}
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-40 object-cover rounded-lg opacity-0 pointer-events-none z-10 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ rotate: Math.random() * 10 - 5 }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
