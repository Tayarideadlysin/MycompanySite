"use client";

import React from "react";
import { 
  Code2, 
  Cpu, 
  Globe2, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Layers 
} from "lucide-react";

// --- 1. DECORATIVE BACKGROUND BOX ---
function BackgroundBox({ className }: { className: string }) {
  return (
    <div className={`absolute border-2 border-[#083a6f]/20 bg-white shadow-xl shadow-[#083a6f]/5 rounded-3xl z-0 transition-transform duration-[10s] animate-pulse pointer-events-none ${className}`} 
         style={{ transform: 'rotate(-12deg)' }}>
      <div className="w-10 h-10 m-6 rounded-xl bg-[#ff6a00]/10" />
      <div className="w-2/3 h-3 m-6 bg-[#083a6f]/10 rounded-full" />
      <div className="w-1/2 h-3 m-6 bg-[#083a6f]/10 rounded-full" />
    </div>
  );
}

// --- 2. INTERACTIVE SERVICE BOX ---
function InteractiveBox({ 
  title, 
  description, 
  icon: Icon, 
  features 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  features: string[] 
}) {
  return (
    <div className="group relative z-10 bg-white border-2 border-gray-50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,58,111,0.1)] hover:-translate-y-2 transition-all duration-500 pointer-events-auto">
      <div className="bg-[#083a6f] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ff6a00] transition-colors duration-500 shadow-lg shadow-[#083a6f]/20">
        <Icon className="text-white" size={32} />
      </div>

      <h3 className="text-2xl font-bold text-[#083a6f] mb-4 group-hover:text-[#ff6a00] transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed text-sm">
        {description}
      </p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
            <CheckCircle2 size={16} className="text-[#ff6a00]" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-[#ff6a00] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
        View Project Details <ArrowRight size={14} />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative bg-[#fcfcfc] overflow-hidden min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative py-32 px-6 isolate">
        <BackgroundBox className="top-10 left-[2%] w-64 h-80 opacity-100 scale-110" />
        <BackgroundBox className="bottom-20 right-[2%] w-72 h-96 opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[40px] border-[#083a6f]/5 rounded-full z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="pointer-events-auto">
            <span className="bg-[#ff6a00]/10 text-[#ff6a00] px-4 py-1 rounded-full font-bold tracking-widest uppercase text-xs mb-6 inline-block">
              Full Stack Engineer
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-[#083a6f] mb-6 leading-[0.9] tracking-tighter">
              BEYOND <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#083a6f] to-[#ff6a00]">THE CODE.</span>
            </h1>
            <p className="text-gray-600 text-xl mb-10 leading-relaxed max-w-xl font-medium">
              I bridge the gap between complex backend logic and high-performance digital experiences, 
              building scalable systems with Next.js and modern cloud architecture.
            </p>
            <button className="bg-[#083a6f] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#ff6a00] transition-all shadow-2xl hover:scale-105 active:scale-95">
              Discuss Your Project
            </button>
          </div>

          {/* THE MODERN PROFILE CIRCLE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
                <div className="absolute inset-0 -m-10 border-[3px] border-dashed border-[#ff6a00]/40 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-0 -m-5 border-2 border-[#083a6f]/20 rounded-full" />
                
                <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[12px] border-white shadow-[0_25px_60px_rgba(8,58,111,0.2)] bg-white">
                  <img 
                    src="/your-profile.jpg" 
                    alt="Developer Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Performance Badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#083a6f] p-6 rounded-[2.5rem] shadow-2xl border-4 border-white flex items-center gap-4 animate-bounce-slow">
                  <div className="bg-[#ff6a00] p-3 rounded-2xl text-white shadow-lg">
                    <Zap size={32} />
                  </div>
                  <div>
                    <p className="text-white font-black text-3xl leading-none">100/100</p>
                    <p className="text-blue-200 text-[10px] uppercase font-bold tracking-widest mt-1">Lighthouse Speed</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="relative py-32 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20">
            <div className="text-left">
                <h2 className="text-5xl font-black text-[#083a6f] uppercase tracking-tighter">Core Expertise</h2>
                <div className="w-32 h-2 bg-[#ff6a00] mt-4 rounded-full"></div>
            </div>
            <p className="text-gray-400 font-bold max-w-xs text-right mt-6 md:mt-0 uppercase text-xs tracking-widest">
                Architecting software that drives business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <InteractiveBox 
              title="Architecture"
              description="Designing robust systems using Next.js 15, Turbopack, and TypeScript for long-term stability."
              icon={Layers}
              features={["Server Components", "Microservices", "Type-Safe APIs"]}
            />
            <InteractiveBox 
              title="Performance"
              description="Optimizing every millisecond of the critical rendering path to ensure 100/100 performance scores."
              icon={Cpu}
              features={["Edge Rendering", "Fast Refresh", "Asset Optimization"]}
            />
            <InteractiveBox 
              title="Global Scale"
              description="Deploying applications to a global CDN for low-latency access across South Africa and the world."
              icon={Globe2}
              features={["Vercel Deployment", "Cloud Integration", "CDN Strategy"]}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}