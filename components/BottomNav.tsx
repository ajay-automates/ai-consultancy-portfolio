'use client'

import { LayoutGrid, List } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface BottomNavProps {
    view: 'list' | 'grid'
    setView: (view: 'list' | 'grid') => void
}

export default function BottomNav({ view, setView }: BottomNavProps) {
    return (
        <div className="fixed bottom-8 w-full z-50 flex justify-between items-end px-8 pointer-events-none">

            {/* View Toggle */}
            <div className="pointer-events-auto bg-gray-800/80 backdrop-blur-md rounded-full p-1 flex gap-1">
                <button
                    onClick={() => setView('grid')}
                    className={clsx(
                        "p-3 rounded-full transition-all",
                        view === 'grid' ? "bg-white text-black" : "text-white hover:bg-gray-700"
                    )}
                >
                    <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                    onClick={() => setView('list')}
                    className={clsx(
                        "p-3 rounded-full transition-all",
                        view === 'list' ? "bg-white text-black" : "text-white hover:bg-gray-700"
                    )}
                >
                    <List className="w-5 h-5" />
                </button>
            </div>

            {/* Main Nav */}
            <nav className="pointer-events-auto absolute left-1/2 -translate-x-1/2 bg-gray-800/80 backdrop-blur-md rounded-full px-1 py-1 flex items-center gap-1">
                {['Work', 'About', 'Careers'].map((item) => (
                    <button
                        key={item}
                        className={clsx(
                            "px-6 py-3 rounded-full text-sm font-medium transition-colors",
                            item === 'Work' ? "bg-white text-black" : "text-white hover:bg-gray-700 hover:text-white"
                        )}
                    >
                        {item}
                    </button>
                ))}
            </nav>

            {/* Filter */}
            <div className="pointer-events-auto">
                <button className="bg-gray-800/80 backdrop-blur-md text-white px-6 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    Filter
                </button>
            </div>
        </div>
    )
}
