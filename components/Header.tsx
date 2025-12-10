'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Ghost } from 'lucide-react'

export default function Header() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Format time as HH:MM GMT
      const timeString = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      })
      setTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start text-xs font-mono tracking-wider mix-blend-difference text-white">
      {/* Logo Area */}
      <div className="flex flex-col gap-2">
        <Ghost className="w-8 h-8" />
      </div>

      {/* Sound Toggle */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:block opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
        ::::: SOUND [OFF]
      </div>

      {/* Info Area */}
      <div className="flex flex-col items-end gap-1 text-right">
        <div className="flex flex-col gap-0.5 opacity-70">
          <span>SILICON VALLEY, USA</span>
          <span>{time}</span>
        </div>

        <div className="max-w-[200px] mt-2 opacity-50 hidden md:block">
          WELCOME TO MY WORLD
        </div>

        <button className="mt-4 bg-white text-black px-6 py-3 rounded-full font-sans font-medium hover:scale-105 transition-transform">
          Let's Talk
        </button>
      </div>
    </header>
  )
}
