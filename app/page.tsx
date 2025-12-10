'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'
import ProjectList from '@/components/ProjectList'
import ProjectGrid from '@/components/ProjectGrid'

export default function Home() {
  const [view, setView] = useState<'list' | 'grid'>('list')

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/30 selection:text-white">
      <Header />

      <div className="transition-opacity duration-500 ease-in-out">
        {view === 'list' ? <ProjectList /> : <ProjectGrid />}
      </div>

      <BottomNav view={view} setView={setView} />
    </main>
  )
}
