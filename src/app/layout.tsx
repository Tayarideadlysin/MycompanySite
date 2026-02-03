"use client"; // This must be at the top for Framer Motion and usePathname

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientGridWrapper from "@/components/ClientGridWrapper";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="antialiased relative min-h-screen">
        {/* 1. THE GRID: Stays static at the bottom. 
               It is OUTSIDE AnimatePresence so it never resets. */}
        <div className="fixed inset-0 z-0">
          <ClientGridWrapper />
        </div>
        
        {/* 2. THE CONTENT LAYER */}
        <div className="relative z-10 pointer-events-none">
          <Navbar />
          
          {/* AnimatePresence detects when the 'key' (pathname) changes */}
          <AnimatePresence mode="wait">
  <motion.main
    key={pathname}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ 
      duration: 1.5,           // 👈 1.5 seconds (Change this to 2.0 for even slower)
      ease: [0.43, 0.13, 0.23, 0.96], // A custom "pro" easing curve
    }}
    className="pointer-events-none"
  >
    {children}
  </motion.main>
</AnimatePresence>

          <Footer />
        </div>
      </body>
    </html>
  );
}