"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900 text-white"
    >
      {/* Background Architectural Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/5 rounded-3xl rotate-12" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border border-indigo-500/10 rounded-full" />
      
      <div className="relative flex flex-col items-center">
        {/* The Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="mb-8 text-indigo-500"
        >
          <Code2 size={48} />
        </motion.div>

        {/* The Counter */}
        <div className="overflow-hidden h-20 flex items-center">
          <motion.span 
            className="text-8xl font-black tracking-tighter italic"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
          >
            {progress}%
          </motion.span>
        </div>

        {/* Technical Progress Bar */}
        <div className="w-48 h-[2px] bg-white/10 mt-4 relative overflow-hidden">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-indigo-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-6 text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500">
          Initializing Digital Infrastructure
        </p>
      </div>
    </motion.div>
  );
}