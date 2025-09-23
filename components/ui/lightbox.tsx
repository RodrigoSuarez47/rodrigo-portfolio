"use client"

import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

interface LightboxProps {
    open: boolean
    onClose: () => void
    children: React.ReactNode
    prev?: () => void
    next?: () => void
}

export default function Lightbox({ open, onClose, children, prev, next }: LightboxProps) {
    const touchStartX = useRef<number | null>(null)

    useEffect(() => {
        if (!open) return
        document.body.style.overflow = "hidden"

        const handleKeyDown = (e: KeyboardEvent) => {
            e.stopPropagation()
            if (e.key === "Escape") onClose()
            if (e.key === "ArrowLeft") prev?.()
            if (e.key === "ArrowRight") next?.()
        }
        window.addEventListener("keydown", handleKeyDown, true)

        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", handleKeyDown, true)
        }
    }, [open, onClose, prev, next])

    if (!open) return null

    const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return
        const delta = e.changedTouches[0].clientX - touchStartX.current
        if (delta > 50) prev?.()
        if (delta < -50) next?.()
        touchStartX.current = null
    }

    return createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <button onClick={onClose} className="absolute top-4 right-4 text-white/90 hover:text-white p-2 rounded-full bg-black/20 hover:bg-black/30 z-20">✕</button>
            {prev && <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-3 rounded-full bg-black/30 hover:bg-black/50 z-20">←</button>}
            {next && <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-3 rounded-full bg-black/30 hover:bg-black/50 z-20">→</button>}
            <div className="relative w-full h-full flex items-center justify-center">{children}</div>
        </div>,
        document.body
    )
}
