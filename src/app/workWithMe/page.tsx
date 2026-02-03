"use client";

import React from 'react';
import { Send, Calendar, Clock, Video, MessageSquare, ChevronRight, Zap } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] overflow-hidden pb-20">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-20 left-10 w-64 h-64 border-2 border-indigo-600/5 rounded-[3rem] -rotate-12 animate-pulse" />
      <div className="absolute bottom-40 right-10 w-80 h-80 border-2 border-indigo-600/5 rounded-[4rem] rotate-12" />

      <div className="container mx-auto px-6 pt-32 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
            <Zap size={14} className="text-indigo-600" fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Available for new projects</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">
            LETS BUILD THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">NEXT BIG THING.</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Whether you have a fully-baked spec or just a rough idea on a napkin, 
            I can help you bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* --- LEFT: MESSAGE BOX (3 Columns) --- */}
          <div className="lg:col-span-3 bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Send a Message</h2>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 outline-none transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 outline-none transition-all text-sm font-medium" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">What can I help you with?</label>
                <textarea rows={4} placeholder="Describe your project goals..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-500 outline-none transition-all text-sm font-medium resize-none" />
              </div>

              <button className="group w-full md:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-lg active:scale-95">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* --- RIGHT: SCHEDULER (2 Columns) --- */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Schedule a Call</h3>
                <p className="text-indigo-100 text-sm mb-8 opacity-80 font-medium">Book a 30-min discovery session to discuss technical feasibility.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <Clock size={20} />
                    <span className="text-sm font-bold">30 Minute Meeting</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <Video size={20} />
                    <span className="text-sm font-bold">Google Meet / Zoom</span>
                  </div>
                </div>

                <a 
                  href="https://calendly.com/your-link" 
                  target="_blank"
                  className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors"
                >
                  Pick a Time <Calendar size={18} />
                </a>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-110 transition-transform" />
            </div>

            {/* QUICK RESPONSE PROMISE */}
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] flex items-center gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Lightning Fast Response</h4>
                  <p className="text-slate-500 text-xs mt-1">I usually respond within 4 hours during business days.</p>
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}