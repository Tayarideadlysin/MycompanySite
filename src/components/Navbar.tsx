"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => setIsOpen(false), [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-[100] p-4 md:p-6 pointer-events-none">
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 rounded-2xl px-5 py-4 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg border border-slate-200" 
          : "bg-white/50 backdrop-blur-sm border border-transparent"
      } pointer-events-auto`}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#083a6f] p-2 rounded-lg group-hover:bg-[#ff6a00] transition-colors">
            <Code2 className="text-white" size={20} />
          </div>
          <span className="text-[#083a6f] font-black text-xl tracking-tighter">
            DEV<span className="text-[#ff6a00]">.</span>PRO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold transition-all hover:text-[#ff6a00] ${
                pathname === link.href ? "text-[#ff6a00]" : "text-[#083a6f]/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/workWithMe" 
            className="group flex items-center gap-2 bg-[#083a6f] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#ff6a00] transition-all shadow-md shadow-[#083a6f]/20"
          >
            Let's Talk
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-[#083a6f] hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[-1] md:hidden pointer-events-auto"
            />
            
            {/* Menu Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-24 left-4 right-4 bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl md:hidden pointer-events-auto"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={`text-3xl font-black tracking-tighter ${
                      pathname === link.href ? "text-[#ff6a00]" : "text-[#083a6f]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-slate-100" />
                <Link 
                  href="/workWithMe"
                  className="w-full bg-[#ff6a00] text-white p-5 rounded-2xl text-center font-bold text-lg shadow-xl"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}