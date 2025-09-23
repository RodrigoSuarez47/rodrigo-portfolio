"use client";

import { useEffect, useState } from "react";

const SYMBOLS = ["{}", "()", "<>", "</>", "$", "[]", "=>", "==", "++", "--"];

interface SymbolData {
    id: number;
    symbol: string;
    top: number;
    left: number;
    size: number;
    duration: number;
}

export default function FloatingSymbols() {
    const [symbols, setSymbols] = useState<SymbolData[]>([]);

    useEffect(() => {
        const generatedSymbols: SymbolData[] = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: 12 + Math.random() * 24,
            duration: 8 + Math.random() * 12,
        }));
        setSymbols(generatedSymbols);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {symbols.map((s) => (
                <span
                    key={s.id}
                    className={`absolute text-primary opacity-60 animate-float`}
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        fontSize: `${s.size}px`,
                        animationDuration: `${s.duration}s`,
                    }}
                >
                    {s.symbol}
                </span>
            ))}
        </div>
    );
}
