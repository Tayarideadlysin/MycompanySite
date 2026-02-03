"use client";

import React, { useState } from 'react';

const words = ["Clean", "Fast", "Secure", "Scalable", "Robust", "Modern", "Neat", "Wow!", "Nice", "Logic"];
const symbols = ["{ }", "</>", "⚡", "⚛️", "◈", "λ", "01"];

export default function InteractiveGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [randomContent, setRandomContent] = useState("");

  const handleMouseEnter = (index: number) => {
    const pool = [...words, ...symbols];
    const content = pool[Math.floor(Math.random() * pool.length)];
    setRandomContent(content);
    setHoveredIndex(index);
    // Increased timeout slightly so you can actually see the word
    setTimeout(() => setHoveredIndex((curr) => curr === index ? null : curr), 1000);
  };

  return (
    <div className="w-full h-full bg-slate-50 overflow-hidden pointer-events-auto relative z-0">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/40 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/30 blur-[120px]" />

      {/* The Grid Container */}
      <div 
        className="grid w-full h-full opacity-[0.4]" 
        style={{ 
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
          gridTemplateRows: 'repeat(auto-fill, minmax(80px, 1fr))' 
        }}
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <div
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            className="border-[0.5px] border-indigo-200/50 flex items-center justify-center relative transition-colors duration-300 hover:bg-white/80"
            style={{ minHeight: '80px', minWidth: '80px' }}
          >
            {/* The Actual Text Rendering */}
            {hoveredIndex === i && (
              <span className="text-[10px] font-black text-indigo-600 uppercase pointer-events-none animate-in fade-in zoom-in duration-200">
                {randomContent}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}