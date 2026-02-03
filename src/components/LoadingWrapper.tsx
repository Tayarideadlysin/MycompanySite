"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// --- 1. THE MIXER BAR COMPONENT ---
function SoundBar({ delay, height }: { delay: string, height: string }) {
  return (
    <div 
      className="w-1.5 md:w-2 bg-indigo-600 rounded-full animate-mixer-wave shadow-[0_0_15px_rgba(79,70,229,0.4)]"
      style={{ animationDelay: delay, height: height }}
    />
  );
}

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true); 
      setTimeout(() => setIsLoading(false), 1200); 
    }, 2800); // Slightly longer to appreciate the waves

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
          {/* STAGGERED BACKGROUND PANELS */}
          <div className="absolute inset-0 flex">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-full bg-slate-950 transition-transform duration-[1100ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
                  isExiting ? "-translate-y-full" : "translate-y-0"
                }`}
                style={{ 
                  width: '25%', 
                  transitionDelay: isExiting ? `${i * 100}ms` : '0ms' 
                }}
              />
            ))}
          </div>

          {/* AUDIO VISUALIZER CONTENT */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${isExiting ? 'opacity-0 scale-90 blur-lg' : 'opacity-100 scale-100'}`}>
            
            {/* The Visualizer Grid - Symmetrical Wave */}
            <div className="flex items-end justify-center gap-2 h-32 mb-10">
              <SoundBar delay="0.5s" height="20px" />
              <SoundBar delay="0.3s" height="40px" />
              <SoundBar delay="0.1s" height="60px" />
              <SoundBar delay="0.0s" height="90px" />
              <SoundBar delay="0.2s" height="70px" />
              <SoundBar delay="0.4s" height="40px" />
              <SoundBar delay="0.6s" height="20px" />
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-black text-white tracking-[0.25em] italic animate-pulse-slow">
                LOADING
              </h2>
              
              <div className="flex justify-center gap-1 mt-4">
                <div className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT REVEAL */}
      <div className={`transition-all duration-1000 ${isLoading && !isExiting ? 'opacity-0 blur-2xl scale-110' : 'opacity-100 blur-0 scale-100'}`}>
        {children}
      </div>

      <style jsx global>{`
        @keyframes mixer-wave {
          0%, 100% { transform: scaleY(1); opacity: 0.4; }
          50% { transform: scaleY(1.8); opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.98); }
        }
        .animate-mixer-wave {
          animation: mixer-wave 1.4s ease-in-out infinite;
          transform-origin: bottom;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}