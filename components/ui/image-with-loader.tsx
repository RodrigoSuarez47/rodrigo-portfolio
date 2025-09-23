"use client"

import React, { useState } from "react"
import Image from "next/image"

type Props = {
    src: string
    alt?: string
    className?: string
    sizes?: string
    priority?: boolean
    onLoad?: () => void
}

export default function ImageWithLoader({ src, alt = "", className = "", sizes, priority = false, onLoad }: Props) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                    <svg className="animate-spin h-6 w-6 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="4" />
                        <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </div>
            )}

            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                priority={priority}
                onLoadingComplete={() => {
                    setLoaded(true)
                    onLoad?.()
                }}
                onError={() => setLoaded(true)}
                className={`object-contain transition-all duration-300 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            />
        </div>
    )
}
