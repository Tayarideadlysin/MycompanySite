import React from 'react';
import { Terminal, Cpu, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    // Changed bg-slate-50 to bg-transparent
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-indigo-100">
      
      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden py-24 lg:py-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 backdrop-blur-sm text-indigo-600 text-sm font-medium mb-6 border border-indigo-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              Available for Q1 2026 Projects
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              I build <span className="text-indigo-600">web experiences</span> that scale with your vision.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              You have the vision for a digital presence. I have the technical expertise to build it using 
              Next.js, Turbopack, and high-performance architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200">
                Start Your Project <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-white/50 backdrop-blur-md border border-slate-300 rounded-lg font-semibold hover:border-indigo-600 transition-all text-slate-700">
                View My Work
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- VALUE PROPOSITION --- */}
      {/* Changed bg-slate-50 to bg-transparent */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 p-6 rounded-2xl transition-all hover:bg-white/50 hover:backdrop-blur-sm">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 border border-slate-100">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold">SEO & Performance</h3>
              <p className="text-slate-600">Fast-loading apps that search engines love. I use Turbopack and Server Components to ensure 100/100 Lighthouse scores.</p>
            </div>
            
            <div className="space-y-4 p-6 rounded-2xl transition-all hover:bg-white/50 hover:backdrop-blur-sm">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 border border-slate-100">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold">Custom Web Apps</h3>
              <p className="text-slate-600">Beyond simple sites. I build complex dashboards, SaaS products, and interactive tools tailored to your workflow.</p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl transition-all hover:bg-white/50 hover:backdrop-blur-sm">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 border border-slate-100">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold">Modern Tech Stack</h3>
              <p className="text-slate-600">Leveraging Next.js 15, Tailwind CSS, and Type-safe code to build software that is easy to maintain and upgrade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE "VISION TO REALITY" SECTION --- */}
      {/* We keep the bg-white here to create a "solid" break in the design */}
      <section className="py-24 bg-white/80 backdrop-blur-md border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-indigo-900 rounded-3xl p-8 lg:p-16 text-white flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">From a concept to a high-converting reality.</h2>
              <ul className="space-y-4">
                {[
                  "Responsive design for all devices",
                  "Secure user authentication & databases",
                  "API integrations (Stripe, Twilio, OpenAI)",
                  "Ongoing support and maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-indigo-100">
                    <CheckCircle2 size={20} className="text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700 w-full relative overflow-hidden group">
               <div className="text-sm font-mono text-indigo-300 mb-4">{"// Outputting your success"}</div>
               <div className="h-4 bg-indigo-500/20 rounded-full w-full mb-4"></div>
               <div className="h-4 bg-indigo-500/20 rounded-full w-3/4 mb-4"></div>
               <div className="h-4 bg-indigo-500/20 rounded-full w-5/6"></div>
               {/* Decorative pulse */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}