"use client";

import React from "react";
import { 
  Globe, 
  Layers, 
  PhoneCall, 
  Headphones, 
  Palette, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Shield
} from "lucide-react";

// --- 1. REFINED GHOST BOX (Smaller & More Subtle) ---
function GhostBox({ className, delay = "0s" }: { className: string, delay?: string }) {
  return (
    <div 
      className={`absolute border border-[#083a6f]/10 bg-white/70 backdrop-blur-sm shadow-xl rounded-[1.5rem] pointer-events-none animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="p-4 space-y-3">
        <div className="w-10 h-10 rounded-lg bg-[#ff6a00]/10 flex items-center justify-center">
             <Zap size={16} className="text-[#ff6a00]" />
        </div>
        <div className="w-24 h-2 bg-[#083a6f]/5 rounded-full" />
        <div className="w-16 h-2 bg-[#083a6f]/5 rounded-full" />
      </div>
    </div>
  );
}

// --- 2. REFINED SERVICE CARD (Slightly Smaller Padding & Text) ---
function ServiceCard({ title, description, icon: Icon, features }: any) {
  return (
    <div className="group relative z-10 bg-white border border-gray-100 rounded-[2rem] p-8 shadow-lg hover:shadow-[0_30px_60px_rgba(8,58,111,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#ff6a00]/5 rounded-full blur-2xl" />
      
      {/* Icon Section - Shrunk to 16x16 container */}
      <div className="relative mb-6">
        <div className="bg-[#083a6f] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-[#ff6a00] group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-[#083a6f]/10">
          <Icon className="text-white" size={32} />
        </div>
      </div>

      <h3 className="text-xl font-black text-[#083a6f] mb-3 tracking-tight uppercase">
        {title}
      </h3>
      
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Feature Pills - More compact */}
      <div className="flex flex-wrap gap-2 mb-6">
        {features.map((f: string, i: number) => (
          <span key={i} className="bg-gray-50 border border-gray-100 text-[#083a6f] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1">
            <CheckCircle2 size={10} className="text-[#ff6a00]" />
            {f}
          </span>
        ))}
      </div>

      <button className="flex items-center gap-2 text-[#ff6a00] font-black text-[11px] uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
        View Details <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default function ServicesPage() {
  const services = [
    {
      title: "Websites",
      description: "High-conversion engines designed to turn traffic into revenue.",
      icon: Globe,
      features: ["Next.js 14", "SEO Authority", "Cloud Edge"]
    },
    {
      title: "Web Apps",
      description: "Complex business logic translated into high-speed digital dashboards.",
      icon: Layers,
      features: ["API Integration", "Auth Systems", "Real-time Data"]
    },
    {
      title: "SIP Trunking",
      description: "Enterprise VOIP infrastructure connecting you to the global PSTN.",
      icon: PhoneCall,
      features: ["HD Audio", "LCR Routing", "Global Termination"]
    },
    {
      title: "Call Centre",
      description: "Full-stack communication hubs with IVR and agent analytics.",
      icon: Headphones,
      features: ["Smart Routing", "CRM Sync", "Live Dashboards"]
    },
    {
      title: "Interactive UI",
      description: "User-centric design blending aesthetics with conversion science.",
      icon: Palette,
      features: ["UX Research", "Motion Design", "Prototypes"]
    },
    {
      title: "Secure Email",
      description: "Encryption and professional hosting for your business domain.",
      icon: Mail,
      features: ["Anti-Spam", "Global Sync", "High Storage"]
    }
  ];

  return (
    <main className="relative bg-[#fcfcfc] overflow-hidden min-h-screen">
      
      {/* 1. HERO SECTION (Tighter Spacing) */}
      <section className="relative pt-32 pb-20 px-6 isolate">
        <GhostBox className="top-10 left-[5%] w-56 h-64 rotate-12" delay="0s" />
        <GhostBox className="top-40 right-[5%] w-48 h-56 -rotate-12 opacity-60" delay="2s" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#083a6f] text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-6">
            <Zap size={12} fill="currentColor" /> Digital Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#083a6f] mb-6 leading-tight tracking-tighter">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#083a6f]">SERVICES.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
            The infrastructure and design your business needs to excel in a connected world.
          </p>
        </div>
      </section>

      {/* 2. SIP EXPLAINER (Reduced scale) */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-14 shadow-xl flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-black text-[#083a6f] uppercase mb-4">Voice Infrastructure</h2>
                <p className="text-gray-600 text-base mb-6">Modernize your telephony with internet-based SIP trunks that cut costs by 60%.</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                        <Shield className="text-[#ff6a00]" size={20} />
                        <p className="text-[#083a6f] font-bold text-[10px] uppercase">Secure</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                        <Zap className="text-[#ff6a00]" size={20} />
                        <p className="text-[#083a6f] font-bold text-[10px] uppercase">Low Latency</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full relative">
                <div className="aspect-video bg-[#083a6f]/5 rounded-[2rem] border-2 border-dashed border-[#083a6f]/10 flex items-center justify-center">
                    <div className="flex gap-3">
                        {[PhoneCall, Globe, Layers].map((Icn, idx) => (
                            <div key={idx} className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-gray-100">
                                <Icn size={20} className="text-[#ff6a00]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. GRID (More compact gap) */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA (Slightly smaller) */}
      <section className="py-24 px-6">
         <div className="max-w-4xl mx-auto bg-[#083a6f] rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-6">READY TO SCALE?</h2>
                <button className="bg-[#ff6a00] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl">
                    Get a Quote
                </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -rotate-45 translate-x-10 -translate-y-10 rounded-[3rem]" />
         </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-10deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}