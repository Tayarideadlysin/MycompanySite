"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const InteractiveGrid = dynamic(() => import('./InteractiveGrid'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-[#fcfcfc] flex flex-col items-center justify-center -z-10">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Outer Static Ring (Navy) */}
        <div className="absolute inset-0 border-[2px] border-[#083a6f]/10 rounded-full" />
        
        {/* Inner Spinning Ring (Orange) */}
        <motion.div
          className="absolute inset-0 border-t-[2px] border-[#ff6a00] rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Center Pulsing Core */}
        <motion.div 
          className="w-1.5 h-1.5 bg-[#083a6f] rounded-full"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Clean Modern Text */}
      <div className="mt-6 flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#083a6f] font-black opacity-40">
          Loading System
        </span>
        {/* Animated Progress Bar */}
        <div className="w-24 h-[1px] bg-gray-100 relative overflow-hidden">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-[#ff6a00] w-1/2"
            animate={{ x: [-100, 200] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  ),
});

export default function ClientGridWrapper() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <InteractiveGrid />
    </div>
  );
}