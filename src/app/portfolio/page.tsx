"use client";

import React from 'react';
import { Code2, Lightbulb, Rocket, Coffee, ExternalLink, Globe } from 'lucide-react';

export default function AboutPage() {
  // --- PARTNERS DATA ---
  const partners = [
    { name: "TechCorp", logo: "TC" },
    { name: "Zambia Logistics", logo: "ZL" },
    { name: "CloudStream", logo: "CS" },
    { name: "Global Freight", logo: "GF" },
    { name: "Innovate SA", logo: "ISA" },
  ];

  // --- PROJECTS DATA ---
  const projects = [
    { 
      title: "Caribou Cargo Dashboard", 
      desc: "Real-time logistics tracking system.", 
      link: "https://cariboucargo.com",
      tags: ["Next.js", "PostgreSQL"]
    },
    { 
      title: "Zambezi VOIP", 
      desc: "SIP Trunking management platform.", 
      link: "#",
      tags: ["WebRTC", "Node.js"]
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-indigo-100 pb-20">
      <div className="container mx-auto px-6 pt-32">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Architecting digital <span className="text-indigo-600">solutions</span> with precision.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            I’m a full-stack developer based in the digital space, specializing in 
            building high-performance applications that bridge the gap between 
            complex backend logic and intuitive user experiences.
          </p>
        </div>

        {/* --- PARTNERS SLIDER (Logo Marquee) --- */}
        <div className="mb-24 overflow-hidden relative">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 text-center">Trusted By Industry Leaders</p>
          <div className="flex w-[200%] animate-marquee whitespace-nowrap items-center">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center justify-center px-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <span className="text-2xl font-black text-slate-800 tracking-tighter">{partner.name}</span>
              </div>
            ))}
          </div>
          {/* Fades for smooth slider edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-12">
            {/* --- THE STORY --- */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code2 className="text-indigo-600" size={20} /> My Approach
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                I don't just write code; I build systems. Whether it's optimizing 
                Next.js rendering paths or designing type-safe APIs, my focus is 
                always on **scalability** and **maintainability**.
              </p>
            </section>

            {/* --- LINKS TO SITES WORKED ON --- */}
            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe className="text-indigo-600" size={20} /> Featured Work
              </h2>
              <div className="grid gap-4">
                {projects.map((project, i) => (
                  <a 
                    key={i} 
                    href={project.link}
                    target="_blank"
                    className="group p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{project.desc}</p>
                      <div className="flex gap-2 mt-3">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 rounded text-slate-400 uppercase tracking-wider">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </a>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Rocket size={18} />, label: "Fast Delivery" },
                { icon: <Coffee size={18} />, label: "Coffee Fueled" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl flex items-center gap-3">
                  <div className="text-indigo-600">{item.icon}</div>
                  <span className="font-bold text-xs text-slate-700 tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- SKILLS CARD --- */}
          <div className="sticky top-32">
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Code2 size={100} />
              </div>
              
              <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-4 text-indigo-400">
                Technical Toolkit
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-mono text-slate-400 mb-3 underline tracking-widest uppercase">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js 15", "React 19", "Tailwind CSS", "TypeScript"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-slate-800 rounded-lg text-xs border border-slate-700 hover:border-indigo-500 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-mono text-slate-400 mb-3 underline tracking-widest uppercase">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "Prisma", "Docker", "AWS"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-slate-800 rounded-lg text-xs border border-slate-700 hover:border-indigo-500 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-indigo-300 font-mono text-[10px] leading-relaxed">
                  // Always learning, always building. <br />
                  // Current Focus: AI & Edge Computing
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}