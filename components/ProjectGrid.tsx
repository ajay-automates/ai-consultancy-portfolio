'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { projects } from './data'

// Configuration for the infinite grid
const CARD_WIDTH = 240
const CARD_HEIGHT = 160
const GAP = 40
const ITEM_WIDTH = CARD_WIDTH + GAP
const ITEM_HEIGHT = CARD_HEIGHT + GAP

// Grid dimensions - large enough to cover viewport + drag buffer
// We ensure these are even numbers for nice centering
const COLS = 14
const ROWS = 10

const LOOP_WIDTH = COLS * ITEM_WIDTH
const LOOP_HEIGHT = ROWS * ITEM_HEIGHT

const HALF_LOOP_WIDTH = LOOP_WIDTH / 2
const HALF_LOOP_HEIGHT = LOOP_HEIGHT / 2

export default function ProjectGrid() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Motion values for global position
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth physics
    const springConfig = { damping: 40, stiffness: 200, mass: 1 }
    const smoothX = useSpring(x, springConfig)
    const smoothY = useSpring(y, springConfig)

    // Drag state
    const isDragging = useRef(false)
    const lastMousePos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handlePointerDown = (e: PointerEvent) => {
            isDragging.current = true
            lastMousePos.current = { x: e.clientX, y: e.clientY }
            container.setPointerCapture(e.pointerId)
            container.style.cursor = 'grabbing'
        }

        const handlePointerMove = (e: PointerEvent) => {
            if (!isDragging.current) return

            const deltaX = e.clientX - lastMousePos.current.x
            const deltaY = e.clientY - lastMousePos.current.y

            x.set(x.get() + deltaX * 1.5)
            y.set(y.get() + deltaY * 1.5)

            lastMousePos.current = { x: e.clientX, y: e.clientY }
        }

        const handlePointerUp = (e: PointerEvent) => {
            isDragging.current = false
            container.releasePointerCapture(e.pointerId)
            container.style.cursor = 'grab'
        }

        // Wheel support
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault()
            // Invert delta to match drag feel
            x.set(x.get() - e.deltaX)
            y.set(y.get() - e.deltaY)
        }

        container.addEventListener('pointerdown', handlePointerDown)
        container.addEventListener('pointermove', handlePointerMove)
        container.addEventListener('pointerup', handlePointerUp)
        container.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
            container.removeEventListener('pointerdown', handlePointerDown)
            container.removeEventListener('pointermove', handlePointerMove)
            container.removeEventListener('pointerup', handlePointerUp)
            container.removeEventListener('wheel', handleWheel)
        }
    }, [x, y])

    // Generate grid slots
    // We creating a flat array of slots, each with a unique base position
    const slots = Array.from({ length: ROWS * COLS }).map((_, i) => {
        const col = i % COLS
        const row = Math.floor(i / COLS)

        // Center the grid relative to (0,0)
        const baseX = (col - COLS / 2) * ITEM_WIDTH + ITEM_WIDTH / 2
        const baseY = (row - ROWS / 2) * ITEM_HEIGHT + ITEM_HEIGHT / 2

        // Assign a project content cyclically
        const projectIndex = i % projects.length

        return {
            id: i,
            baseX,
            baseY,
            project: projects[projectIndex]
        }
    })

    return (
        <div
            ref={containerRef}
            className="w-full h-screen overflow-hidden bg-black relative flex items-center justify-center cursor-grab [perspective:1200px]"
        >
            {/* Ambient Back Glow - darker for phantom style */}
            <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-black to-black opacity-40 pointer-events-none" />

            <div
                className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
            >
                {slots.map((slot) => (
                    <InfiniteCard
                        key={slot.id}
                        slot={slot}
                        x={smoothX}
                        y={smoothY}
                    />
                ))}
            </div>
        </div>
    )
}

function InfiniteCard({ slot, x, y }: any) {
    // Calculate the wrapped position based on the global drag values (x, y)

    const transformedX = useTransform(x, (latestX: number) => {
        // Shift by base position
        const rawPos = latestX + slot.baseX
        // Wrap around loop width using modulo
        // ((n % m) + m) % m ensures positive modulo result
        const wrappedCood = ((rawPos % LOOP_WIDTH) + LOOP_WIDTH) % LOOP_WIDTH
        // Shift back to centered coordinate space (-width/2 to +width/2)
        return wrappedCood - HALF_LOOP_WIDTH
    })

    const transformedY = useTransform(y, (latestY: number) => {
        const rawPos = latestY + slot.baseY
        const wrappedCood = ((rawPos % LOOP_HEIGHT) + LOOP_HEIGHT) % LOOP_HEIGHT
        return wrappedCood - HALF_LOOP_HEIGHT
    })

    // 3D Globe Effects based on the wrapped position
    const rotateX = useTransform(transformedY, (val) => -val * 0.08) // Up/Down drag rotates X axis
    const rotateY = useTransform(transformedX, (val) => val * 0.08)   // Left/Right drag rotates Y axis

    const z = useTransform([transformedX, transformedY], ([tx, ty]: any) => {
        // Distance from center
        const dist = Math.sqrt(tx * tx + ty * ty)
        // Curve away from viewer
        return -dist * 0.4
    })

    const opacity = useTransform([transformedX, transformedY], ([tx, ty]: any) => {
        const dist = Math.sqrt(tx * tx + ty * ty)
        // Fade out edges
        if (dist > 900) return 0
        return 1 - (dist / 1200)
    })

    const handleClick = () => {
        window.location.href = '/website-inquiry'
    }

    return (
        <motion.div
            style={{
                x: transformedX,
                y: transformedY,
                z: z,
                rotateX: rotateX,
                rotateY: rotateY,
                opacity: opacity,
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                position: 'absolute',
                // Important for proper 3D
                transformOrigin: 'center center'
            }}
            className={`group rounded-md overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-white/40 transition-colors shadow-2xl ${slot.project.link ? 'cursor-pointer' : ''}`}
            onClick={handleClick}
        >
            <div className="relative w-full h-full">
                <img
                    src={slot.project.image}
                    alt={slot.project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] text-orange-500 font-mono font-bold tracking-wider uppercase mb-1">
                        {slot.project.client}
                    </span>
                    <h3 className="text-sm font-bold leading-tight text-white line-clamp-2">
                        {slot.project.title}
                    </h3>
                    {slot.project.link && (
                        <span className="text-[8px] text-white/60 mt-1">Book a call →</span>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
